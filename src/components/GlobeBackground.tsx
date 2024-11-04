// src/components/World.js
import React, { useState, useEffect, useRef, forwardRef } from "react";
import ReactDOM from "react-dom/client"; // For React 18 compatibility
import dynamic from "next/dynamic";
import { feature } from "topojson-client";
import * as THREE from "three";
import { PALETTE } from "@src/theme";
import styled from "styled-components";

// Dynamically import Globe with SSR disabled
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const World = ({ containerId }) => {
  const globeEl = useRef(null);
  const [countries, setCountries] = useState({ features: [] });
  const [altitude, setAltitude] = useState(0.1);
  const [transitionDuration, setTransitionDuration] = useState(1000);
  const [landPolygons, setLandPolygons] = useState([]);

  useEffect(() => {
    // Load TopoJSON data
    fetch("/land-110m.json") // Ensure this JSON file is in your public folder
      .then((res) => res.json())
      .then((landTopo) => {
        setLandPolygons(feature(landTopo, landTopo.objects.land).features);
      });
  }, []);

  const polygonsMaterial = new THREE.MeshLambertMaterial({
    color: PALETTE.mono.dark,
    side: THREE.DoubleSide,
  });

  useEffect(() => {
    // Load countries data
    fetch("/datasets/ne_110m_admin_0_countries.geojson")
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);

        // Update altitude and transition after loading
        setTimeout(() => {
          setTransitionDuration(4000);
          setAltitude(
            (() => (feat) =>
              Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 7e-5)) as any
          );
        }, 3000);
      });
  }, []);

  useEffect(() => {
    // Set auto-rotate and initial view once the globe is ready
    if (globeEl.current) {
      console.log("globeEl.current", globeEl.current);
      // globeEl.current.controls().autoRotate = true;
      // globeEl.current.controls().autoRotateSpeed = 0.3;
      // globeEl.current.pointOfView({ altitude: 4 }, 5000);
    }
  }, [countries]);

  return (
    <Globe
      ref={globeEl}
      backgroundColor="rgba(0,0,0,0)"
      showGlobe={false}
      showAtmosphere={false}
      polygonsData={landPolygons}
      polygonCapMaterial={polygonsMaterial}
      polygonSideColor={() => "rgba(0, 0, 0, 0)"}
    />
  );
};

// Function to render the World component into a specific DOM element by id
export const renderWorldInContainer = (containerId) => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = ReactDOM.createRoot(container); // Creates a new React root
    root.render(
      <GlobeAnchor id="globe-anchor">
        <GlobeWrapper id="globe-wrapper">
          <World containerId={containerId} />
        </GlobeWrapper>
      </GlobeAnchor>
    );
  }
};

export default World;

const GlobeAnchor = styled.div`
  position: relative;
  height: 0px;
`;
const GlobeWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  /* z-index: 9; // Ensures globe is a background element */
`;
