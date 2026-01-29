import Globe from "react-globe.gl";
import React from 'react';
import { useRef, useEffect } from "react";
import EarthTexture from '../../static/images/earth-night.jpg';

const Earth = () => {
    const el = useRef();
    const globeRef = useRef();
    const markerSvg = `<svg viewBox="-4 0 36 36"><path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path><circle fill="#151d3c" cx="14" cy="14" r="7"></circle></svg>`;

    const gData = [
        { lat: 41.3879, lng: 2.16992, size: 20, color: '#83c2c1' }, // Barcelona spot
    ];

    useEffect(() => {
        const controls = globeRef.current.controls();
        controls.autoRotate = true;
        controls.autoRotateSpeed = -0.6; // adjust rotation speed here
    }, []);

    return (
        <div className="earth__container" ref={el}>
            <Globe ref={globeRef}
                globeImageUrl={EarthTexture}
                htmlElementsData={gData}
                htmlElement={d => {
                    const el = document.createElement('div');
                    el.innerHTML = markerSvg;
                    el.style.color = d.color;
                    el.style.width = `${d.size}px`;
                    el.style.transition = 'opacity 250ms';
                    el.classList.add('earth__marker');
                    el.style['pointer-events'] = 'auto';
                    el.style.cursor = 'pointer';
                    el.onclick = () => console.info(d);
                    return el;
                }}
                animateIn={false}
                backgroundColor="rgba(0,0,0,0)"
                               
            />
        </div>
    );
};

export default Earth;