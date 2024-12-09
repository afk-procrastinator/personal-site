import React, { useEffect, useRef } from 'react';
import Map, { MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapVisualization: React.FC = () => {
  const mapRef = useRef<MapRef>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    let longitude = 0;
    const rotationSpeed = 0.08; // Degrees per frame

    const animate = () => {
      longitude = (longitude + rotationSpeed) % 360;
      
      mapRef.current?.getMap().easeTo({
        center: [longitude, 20],
        duration: 0,
        essential: true
      });

      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <section className="relative z-10 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-top gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-ctp-text">
              Global Perspective
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-ctp-subtext1 leading-relaxed">
                I had the privilege of experiencing a truly international and multicultural upbringing. My experiences overseas — from the Australian outback to Siberian steppes — have profoundly influenced my academic and professional pursuits.
              </p>
              <p className="text-lg text-ctp-subtext1 leading-relaxed">
                This global perspective has shaped my understanding of complex international challenges and fostered a deep appreciation for cross-cultural collaboration in addressing global issues.
              </p>
            </div>
          </div>

          {/* Globe */}
          <div className="w-full lg:w-1/2 h-[600px] rounded-2xl overflow-hidden bg-ctp-surface0">
            <Map
              ref={mapRef}
              mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
              initialViewState={{
                longitude: 0,
                latitude: 20,
                zoom: 1
              }}
              style={{ width: '100%', height: '100%' }}
              mapStyle="mapbox://styles/smichaels/cm4erlqxd01mn01qr94e25wod"
              interactive={false}
              attributionControl={true}
              renderWorldCopies={true}
              boxZoom={false} 
              dragPan={false}
              dragRotate={false}
              scrollZoom={false}
              doubleClickZoom={false}
              touchPitch={false}
              projection={{ name: 'globe' } as const}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapVisualization; 