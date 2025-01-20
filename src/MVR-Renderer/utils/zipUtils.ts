import JSZip from "jszip"; // Handle the .mvr file (just a zip file)

// Given a zipURL(Local) get the zip file
export async function loadZip(file: File): Promise<JSZip> {
  const zipArchive: JSZip = await JSZip.loadAsync(file); // Load the archive from the binary data
  return zipArchive;
}

export async function getFiles(
  zipArchive: JSZip,
  extension: string,
): Promise<JSZip.JSZipObject[]> {
  const files: JSZip.JSZipObject[] = [];
  zipArchive.forEach((relativePath: string, zippedFile: JSZip.JSZipObject) => {
    if (relativePath.endsWith(extension)) {
      files.push(zippedFile);
    }
  });
  if (files.length == 0) {
    throw new Error("No files found with the extension: '" + extension + "'");
  }
  return files;
}

export async function getFile(
  zipArchive: JSZip,
  name: string,
): Promise<JSZip.JSZipObject> {
  const file: JSZip.JSZipObject | null = zipArchive.file(name);

  if (file == null) {
    throw new Error("No file found with the name: '" + name + "'");
  }
  return file;
}

export async function getTextContent(
  zippedFile: JSZip.JSZipObject,
): Promise<string> {
  // Return string contents
  return await zippedFile.async("text");
}
