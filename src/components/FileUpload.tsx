import { useMVRFileContext } from "../contexts/MVRFileContext.tsx";

function FileUpload() {
    const { setFile } = useMVRFileContext();

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const inputElement = event.target as HTMLInputElement;
        if (!inputElement || !inputElement.files || !inputElement.files[0])
            throw new Error("Error, no target or files");
        setFile(inputElement.files[0]);
    }

    return <input type="file" id="fileInput" accept=".mvr" onChange={handleFileChange} />;
}

export default FileUpload;
