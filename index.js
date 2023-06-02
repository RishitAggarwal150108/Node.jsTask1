const fs = require('fs');

if (process.argv.length < 3) {
  console.log('Please provide a string to search for.');
  process.exit(1);
}

const searchString = process.argv[2];

fs.readFile('./example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('An error occurred while reading the file:', err);
    process.exit(1);
  }
  const exists = data.includes(searchString);

  console.log(exists);
});