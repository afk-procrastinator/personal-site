import React, { useEffect, useRef, useState } from 'react';
import Map, { MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapVisualization: React.FC = () => {
  const mapRef = useRef<MapRef>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const lastInteractionTime = useRef<number>(0);
  const isDragging = useRef(false);
  const lastMouseX = useRef<number | null>(null);
  const currentLongitude = useRef(0);

  useEffect(() => {
    if (!mapLoaded) return;

    const rotationSpeed = 0.3;
    const interactionTimeout = 2000;

    const animate = () => {
      if (!mapRef.current?.getMap()) return;

      const currentTime = Date.now();
      const map = mapRef.current.getMap();
      
      // Only rotate if we haven't interacted recently and not currently dragging
      if (!isDragging.current && currentTime - lastInteractionTime.current > interactionTimeout) {
        currentLongitude.current = (currentLongitude.current + rotationSpeed) % 360;
        map.setCenter([currentLongitude.current, 0]);
      }
      
      requestAnimationFrame(animate);
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      lastMouseX.current = e.clientX;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || lastMouseX.current === null || !mapRef.current?.getMap()) return;

      const map = mapRef.current.getMap();
      const deltaX = e.clientX - lastMouseX.current;
      
      // Convert pixel movement to longitude (adjust sensitivity as needed)
      const sensitivity = 0.5;
      currentLongitude.current = (currentLongitude.current - (deltaX * sensitivity)) % 360;
      
      map.setCenter([currentLongitude.current, 0]);
      lastMouseX.current = e.clientX;
      lastInteractionTime.current = Date.now();
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      lastMouseX.current = null;
      lastInteractionTime.current = Date.now();
    };

    // Add mouse event listeners to the map container
    const mapContainer = mapRef.current?.getMap().getContainer();
    if (mapContainer) {
      mapContainer.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    // Start animation
    requestAnimationFrame(animate);

    return () => {
      if (mapContainer) {
        mapContainer.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [mapLoaded]);

  const onMapLoad = () => {
    setMapLoaded(true);
  };

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
                latitude: 0,
                zoom: 1.2,
                bearing: 0,
                pitch: 0
              }}
              style={{ width: '100%', height: '100%', cursor: 'grab' }}
              mapStyle="mapbox://styles/smichaels/cm4erlqxd01mn01qr94e25wod"
              interactive={false}
              attributionControl={true}
              renderWorldCopies={true}
              onLoad={onMapLoad}
              projection={{ name: 'globe' } as const}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapVisualization; 