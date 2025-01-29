import { useProgressStepsContext } from "../contexts/ProgressContext.tsx";
import MVRMain from "../MVR-Renderer/Main.ts";

function FileUpload() {
    const psContext = useProgressStepsContext();

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputElement = event.target as HTMLInputElement;
        if (!inputElement || !inputElement.files || !inputElement.files[0])
            throw new Error("Error, no target or files");
        MVRMain.loadFile(inputElement.files[0], psContext);
    };

    return <input type="file" id="fileInput" accept=".mvr" onChange={handleFileChange} />;
}

export default FileUpload;
