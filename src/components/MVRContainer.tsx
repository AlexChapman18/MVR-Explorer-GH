import { useEffect, useRef } from "react";
import { init } from "../MVR-Renderer/Main.ts";

function MVRContainer() {
    // Get reference to container
    const refContainer = useRef(null);

    // Run initMVRCanvas when container is mounted
    useEffect(() => {
        init(refContainer);
    }, []);
    return <div ref={refContainer} className="MVRContainer"></div>;
}

export default MVRContainer;
