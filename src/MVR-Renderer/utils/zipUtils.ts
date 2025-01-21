import JSZip from "jszip"; // Handle the .mvr file (just a zip file)

// Given a zipURL(Local) get the zip file
export async function loadZip(file: File): Promise<JSZip> {
    const zipArchive: JSZip = await JSZip.loadAsync(file); // Load the archive from the binary data
    return zipArchive;
}

// Get all the files from zip with extension
export async function getFiles(zipArchive: JSZip, extension: string): Promise<JSZip.JSZipObject[]> {
    const files: JSZip.JSZipObject[] = [];
    zipArchive.forEach((relativePath: string, zippedFile: JSZip.JSZipObject) => {
        if (relativePath.endsWith(extension)) {
            files.push(zippedFile);
        }
    });
    return files;
}

// Get file from zip with extension
export async function getFile(zipArchive: JSZip, name: string): Promise<JSZip.JSZipObject> {
    const file: JSZip.JSZipObject | null = zipArchive.file(name);

    if (file == null) {
        throw new Error("No file found with the name: '" + name + "'");
    }
    return file;
}

// Get the text content of a zip file
export async function getTextContent(zippedFile: JSZip.JSZipObject): Promise<string> {
    return await zippedFile.async("text");
}
