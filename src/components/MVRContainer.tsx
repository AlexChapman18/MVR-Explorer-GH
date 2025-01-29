import { useEffect, useRef, useState } from "react";
import MVRMain from "../MVR-Renderer/Main.ts";

function MVRContainer() {
    const refContainer = useRef<HTMLDivElement>(null);

    // Run initMVRCanvas when container is mounted
    useEffect(() => {
        MVRMain.init();
        refContainer.current!.appendChild(MVRMain.renderer.domElement);
    }, []);

    return (
        <>
            <div ref={refContainer} className="MVRContainer" />
        </>
    );
}

export default MVRContainer;
