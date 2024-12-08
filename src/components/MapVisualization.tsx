import React from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapVisualization: React.FC = () => {
  return (
    <section className="relative z-10 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <h2 className="text-3xl font-bold text-ctp-text md:w-1/3">
            Global Perspective
          </h2>
          <p className="text-lg text-ctp-subtext1 leading-relaxed md:w-2/3">
            I had the privilege of experiencing a truly international and multicultural upbringing. My experiences overseas — from the Australian outback to Siberian steppes — have profoundly influenced my academic and professional pursuits.
          </p>
        </div>
        <div className="h-[700px] rounded-lg overflow-hidden">
          <Map
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
            initialViewState={{
              longitude: 0,
              latitude: 20,
              zoom: 1
            }}
            style={{ width: '100%', height: '100%' }}
            mapStyle="mapbox://styles/smichaels/cm4erlqxd01mn01qr94e25wod?optimize=true"
            interactive={false}
            attributionControl={true}
            renderWorldCopies={false}
            boxZoom={false} 
            dragPan={false}
            dragRotate={false}
            scrollZoom={false}
            doubleClickZoom={false}
            touchPitch={false}
          />
        </div>
      </div>
    </section>
  );
};

export default MapVisualization; 