import { useEffect, useRef } from "react";
import { initMVRCanvas } from "../MVR-Renderer/Main.ts";

function MVRContainer() {
    // Get reference to container
    const refContainer = useRef(null);

    // Run initMVRCanvas when container is mounted
    useEffect(() => {
        initMVRCanvas(refContainer);
    }, []);
    return <div ref={refContainer}></div>;
}

export default MVRContainer;
