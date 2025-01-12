// src/main.js
import JSZip from 'jszip';

const fileInput = document.getElementById('fileInput');
const fileListContainer = document.getElementById('fileList');

fileInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];

  if (file) {
    // Handle cases where the file extension is .mvr but it might be a zip file
    if (file.name.endsWith('.mvr')) {
      // Try to load the file as a ZIP
      try {
        const zip = new JSZip();
        const loadedZip = await zip.loadAsync(file);
        const fileEntries = [];

        // Iterate over each file inside the ZIP
        loadedZip.forEach((relativePath, zipEntry) => {
          fileEntries.push({
            name: zipEntry.name,
            size: zipEntry._data.uncompressedSize, // size of the file
            date: zipEntry.date, // date of the file
            file: zipEntry
          });
        });

        // Display the file list
        displayFileList(fileEntries);

      } catch (error) {
        alert("The file is not a valid ZIP archive.");
      }
    } else {
      alert("Please upload a valid .mvr file.");
    }
  } else {
    alert("No file selected.");
  }
});

function displayFileList(fileEntries) {
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

    // File size
    const fileSize = document.createElement('p');
    fileSize.textContent = `Size: ${formatSize(file.size)}`;
    fileItem.appendChild(fileSize);

    // File date (last modified date)
    const fileDate = document.createElement('p');
    fileDate.textContent = `Date: ${file.date.toLocaleString()}`;
    fileItem.appendChild(fileDate);

    // Add Extract Button
    const extractButton = document.createElement('button');
    extractButton.textContent = `Extract ${file.name}`;
    extractButton.addEventListener('click', () => extractFile(file.file));

    fileItem.appendChild(extractButton);
    fileListContainer.appendChild(fileItem);
  });
}

async function extractFile(zipEntry) {
  try {
    // Extract file content (you can also use 'blob', 'arraybuffer', or 'base64' depending on the file type)
    const fileContent = await zipEntry.async('text');
    alert(`Content of ${zipEntry.name}: \n\n${fileContent}`);
  } catch (error) {
    alert(`Error extracting file: ${error.message}`);
  }
}

// Utility function to format file size (from bytes to a readable format)
function formatSize(bytes) {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + units[i];
}
