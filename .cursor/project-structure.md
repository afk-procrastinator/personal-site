# Personal Site Project Structure

This document provides an overview of the project structure and the purpose of each component.

## Project Overview
This appears to be a personal website built with React, TypeScript, and Vite, using Tailwind CSS for styling. The site includes various sections showcasing personal information, experience, skills, and other professional details.

## Directory Structure

### Root Directory
- `.cursor/` - Contains project documentation and configuration
- `.git/` - Git version control directory
- `public/` - Static assets directory
- `src/` - Source code directory
- `node_modules/` - Dependencies directory
- `scripts/` - Utility scripts

### Configuration Files
- `package.json` - Project dependencies and scripts
- `package-lock.json` - Dependency lock file
- `tsconfig.json` - TypeScript configuration
- `tsconfig.app.json` - App-specific TypeScript configuration
- `tsconfig.node.json` - Node-specific TypeScript configuration
- `vite.config.ts` - Vite bundler configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint configuration
- `vercel.json` - Vercel deployment configuration
- `.gitignore` - Git ignore rules

### Source Code (`src/`)

#### Components (`src/components/`)
- `Experience.tsx` - Experience section component
- `MapVisualization.tsx` - Map visualization component
- `Expertise.tsx` - Expertise section component
- `Footer.tsx` - Footer component
- `Skills.tsx` - Skills section component
- `ThemeToggle.tsx` - Theme toggle functionality
- `Works.tsx` - Works/Projects section
- `BlogPost.tsx` - Blog post component
- `Book.tsx` - Book component
- `Bookshelf.tsx` - Bookshelf component
- `Education.tsx` - Education section component
- `hero/` - Hero section components

#### Content (`src/content/`)
- `books.ts` - Book-related content data

#### Core Files
- `App.tsx` - Main application component
- `main.tsx` - Application entry point
- `index.css` - Global styles
- `vite-env.d.ts` - Vite environment type definitions

## Technology Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint
- PostCSS

## Features
The website includes several sections:
1. Hero section
2. Experience
3. Skills
4. Expertise
5. Education
6. Works/Projects
7. Bookshelf
8. Blog
9. Map Visualization
10. Theme Toggle functionality

## Deployment
The project is configured for deployment on Vercel, as indicated by the presence of `vercel.json`.

## Development
The project uses modern development tools and practices:
- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- Vite for fast development and building 