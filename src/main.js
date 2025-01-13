// src/main.js
import JSZip from 'jszip';
import xml2json from 'simple-xml-to-json';

// TODO: Learn JS async
// TODO: Learn GSD structure

const fileInput = document.getElementById('fileInput'); // File upload button
const fileListContainer = document.getElementById('fileList'); // List of files

fileInput.addEventListener('change', async (event) => { // Wait for event to happen (Upload file)
  const file = event.target.files[0]; // Get the uploaded files

  if (file) {
    // Handle cases where the file extension is .mvr but it might be a zip file
    if (file.name.endsWith('.mvr')) {
      // Try to load the file as a ZIP
      try {
        const zip = new JSZip();
        const loadedZip = await zip.loadAsync(file);
        const fileEntries = [];

        // Get and log the MVR GSD
        const GSD = getGSD(loadedZip);
        console.log(GSD);

        // Iterate over each file inside the ZIP
        loadedZip.forEach((relativePath, zipArchive) => {
          fileEntries.push({
            name: zipArchive.name,
            size: zipArchive._data.uncompressedSize, // size of the file
            date: zipArchive.date, // date of the file
            file: zipArchive
          });
        });

        // Display the file list
        displayFileList(fileEntries);

      } catch (error) {
        alert(error);
        // alert("The file is not a valid ZIP archive.");
      }
    } else {
      alert("Please upload a valid .mvr file.");
    }
  } else {
    alert("No file selected.");
  }
});

async function displayFileList(fileEntries) {
  // Clear any previous file list
  fileListContainer.innerHTML = '';

  // Add each file from the ZIP to the file list
  fileEntries.forEach((file, index) => {
    const fileItem = document.createElement('div');
    fileItem.classList.add('file-item');

    // File name
    const fileName = document.createElement('p');
    fileName.textContent = `Name: ${file.name}`;
    fileItem.appendChild(fileName);

    // File date (last modified date)
    const fileDate = document.createElement('p');
    fileDate.textContent = `Date: ${file.date.toLocaleString()}`;
    fileItem.appendChild(fileDate);

    // Add Extract Button
    const extractButton = document.createElement('button');
    extractButton.textContent = `Extract ${file.name}`;
    extractButton.addEventListener('click', async () => alert(await extractFile(file.file)));

    fileItem.appendChild(extractButton);
    fileListContainer.appendChild(fileItem);
  });
}

async function extractFile(zipArchive) {
  try {
    // Return file contents
    const fileContent = await zipArchive.async('text');
    return fileContent;
  } catch (error) {
    alert(`Error extracting file: ${error.message}`);
  }
}

// Get the GeneralSceneDescriptor from archive
async function getGSD(zipArchive) {
  const xmlFile = await extractFile(zipArchive.file("GeneralSceneDescription.xml"));
  const jsonFile = xml2json.convertXML(xmlFile);
  return jsonFile;
}