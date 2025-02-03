import { useEffect, useRef } from "react";
import MVRMain from "../MVR-Renderer/Main.ts";

function CanvasContainer() {
    const refContainer = useRef<HTMLDivElement>(null);

    // Run initMVRCanvas when container is mounted
    useEffect(() => {
        MVRMain.init(refContainer.current!);
        refContainer.current!.appendChild(MVRMain.renderer.domElement);
    }, []);

    return (
        <>
            <div ref={refContainer} className="w-full" />
        </>
    );
}

export default CanvasContainer;
