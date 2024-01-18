const fs = require("fs");

// Read a text file
fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    // Handle any error that occurs during file reading
    console.error("Error reading file:", err);
  } else {
    console.log("File content:");
    console.log(data);

    // Append additional text to the file
    fs.appendFile("sample.txt", "\nAppended text!\n", (appendErr) => {
      if (appendErr) {
        // Handle any error that occurs during file appending
        console.error("Error appending to file:", appendErr);
      } else {
        console.log("Text appended successfully.");

        // Read the updated file content
        fs.readFile("sample.txt", "utf8", (readErr, updatedData) => {
          if (readErr) {
            // Handle any error that occurs during updated file reading
            console.error("Error reading updated file:", readErr);
          } else {
            console.log("Updated file content:");
            console.log(updatedData);
          }
        });
      }
    });
  }
});