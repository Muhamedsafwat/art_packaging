import fs from "fs";
import path from "path";

// Get the folder path from user input
const folderPath = process.argv[2];

if (!folderPath) {
  console.error("Please provide a folder path.");
  process.exit(1);
}

// Read files in the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    process.exit(1);
  }

  // Filter out non-image files (optional)
  files = files.filter(file => path.extname(file));

  // Sort files numerically based on their current name
  files.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || "0", 10);
    const numB = parseInt(b.match(/\d+/)?.[0] || "0", 10);
    return numA - numB;
  });

  // Rename files in sequential order
  files.forEach((file, index) => {
    const ext = path.extname(file); // Get file extension
    const newFileName = `${index + 1}${ext}`; // Rename sequentially (1.png, 2.png, 3.png...)

    const oldFilePath = path.join(folderPath, file);
    const newFilePath = path.join(folderPath, newFileName);

    // Rename file
    fs.rename(oldFilePath, newFilePath, (renameErr) => {
      if (renameErr) {
        console.error(`Error renaming file ${file}:`, renameErr);
      } else {
        console.log(`Renamed: ${file} → ${newFileName}`);
      }
    });
  });
});

