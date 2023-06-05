const fs = require('fs');
const filePath = process.argv[2];

try {
  const fileData = fs.readFileSync(filePath, 'utf8');
  const newLines = fileData.split('\n').length - 1;
  console.log(newLines);
} catch (err) {
  console.error('Error reading the file:', err);
}