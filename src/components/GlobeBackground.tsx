// src/components/GlobeBackground.js
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import * as THREE from "three";
import { feature } from "topojson-client";
import { COLORS, PALETTE } from "@src/theme";

// Dynamically import Globe from react-globe.gl with SSR disabled
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export const GlobeBackground = () => {
  const [landPolygons, setLandPolygons] = useState([]);

  useEffect(() => {
    // Load TopoJSON data
    fetch("/land-110m.json") // Ensure this JSON file is in your public folder
      .then((res) => res.json())
      .then((landTopo) => {
        setLandPolygons(feature(landTopo, landTopo.objects.land).features);
      });
  }, []);

  // Define the material for polygons
  const polygonsMaterial = new THREE.MeshLambertMaterial({
    color: PALETTE.mono.dark,
    side: THREE.DoubleSide,
  });

  return (
    <GlobeAnchor>
      <GlobeWrapper id="globe-background">
        {Globe && (
          <Globe
            backgroundColor="rgba(0,0,0,0)"
            showGlobe={false}
            showAtmosphere={false}
            polygonsData={landPolygons}
            polygonCapMaterial={polygonsMaterial}
            polygonSideColor={() => "rgba(0, 0, 0, 0)"}
          />
        )}
      </GlobeWrapper>
    </GlobeAnchor>
  );
};

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

export default GlobeBackground;
