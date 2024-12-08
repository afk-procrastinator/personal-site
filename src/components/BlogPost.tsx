import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  title?: string;
  content?: string;
}

interface PostData {
  title: string;
  content: string;
}

interface PostFrontmatter {
  title: string;
  slug: string;
}

// Custom component to handle video embeds
const VideoEmbed: React.FC<{ src: string; title?: string }> = ({ src, title }) => {
  // Handle YouTube URLs
  if (src.includes('youtube.com') || src.includes('youtu.be')) {
    const videoId = src.includes('youtube.com') 
      ? src.split('v=')[1]?.split('&')[0]
      : src.split('youtu.be/')[1]?.split('?')[0];

    if (!videoId) return null;

    return (
      <div className="aspect-w-16 aspect-h-9 my-8">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title || 'YouTube video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      </div>
    );
  }

  // Handle direct video files
  return (
    <div className="my-8">
      <video
        controls
        className="w-full rounded-lg"
        title={title || 'Video'}
      >
        <source src={src} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const BlogPost: React.FC<BlogPostProps> = ({ title: defaultTitle, content: defaultContent }) => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        if (defaultTitle && defaultContent) {
          setPost({ title: defaultTitle, content: defaultContent });
        } else if (slug) {
          const response = await fetch(`/src/content/posts/${slug}.md`);
          const markdown = await response.text();
          
          // Extract frontmatter and content
          const matches = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
          if (matches) {
            const [, frontmatter, content] = matches;
            
            // Parse frontmatter into key-value pairs
            const frontmatterData: Partial<PostFrontmatter> = {};
            frontmatter.split('\n').forEach(line => {
              const [key, ...valueParts] = line.split(':');
              if (key && valueParts.length > 0) {
                frontmatterData[key.trim() as keyof PostFrontmatter] = valueParts.join(':').trim();
              }
            });

            // Use title from frontmatter or fallback to slug
            const title = frontmatterData.title || slug;
            setPost({ title, content: content.trim() });
          } else {
            setPost({ title: slug, content: markdown });
          }
        }
      } catch (error) {
        console.error('Error loading post:', error);
        setPost({ 
          title: 'Post Not Found', 
          content: 'Sorry, the requested post could not be found.' 
        });
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, defaultTitle, defaultContent]);

  // Process content to handle video embeds
  const processContent = (content: string) => {
    const parts = content.split(/(?=<!--video:)|(?<=-->)/);
    return parts.map((part, index) => {
      if (part.startsWith('<!--video:') && part.endsWith('-->')) {
        const videoUrl = part.replace('<!--video:', '').replace('-->', '').trim();
        return <VideoEmbed key={index} src={videoUrl} />;
      }
      return <ReactMarkdown key={index}>{part}</ReactMarkdown>;
    });
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-ctp-surface0 rounded w-3/4 mb-4"></div>
          <div className="space-y-4">
            <div className="h-4 bg-ctp-surface0 rounded"></div>
            <div className="h-4 bg-ctp-surface0 rounded"></div>
            <div className="h-4 bg-ctp-surface0 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-ctp-base to-ctp-crust">
      <nav className="fixed top-0 left-0 right-0 bg-ctp-mantle/80 backdrop-blur-sm z-50">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-ctp-subtext1 hover:text-ctp-text transition-colors"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-4 pt-24 pb-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-ctp-mauve to-ctp-pink bg-clip-text text-transparent">
            {post?.title || 'Blog Post Title'}
          </h1>
        </header>
        
        <div className="prose prose-lg prose-invert max-w-none">
          {post?.content ? (
            processContent(post.content)
          ) : (
            <p className="text-lg text-ctp-subtext1">
              This is a placeholder for the blog post content.
            </p>
          )}
        </div>
      </article>
    </div>
  );
};

export default BlogPost; 