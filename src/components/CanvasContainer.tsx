import { useEffect, useRef } from "react";
import MVRMain from "../MVR-Renderer/Main.ts";

function CanvasContainer() {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        MVRMain.init(canvas.current!);
    }, []);

    return <canvas ref={canvas} className="bg-primary flex-grow min-h-0 min-w-0 p-3"></canvas>;
}

export default CanvasContainer;
