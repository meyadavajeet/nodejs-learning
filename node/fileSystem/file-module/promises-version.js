const fs = require('node:fs/promises');

async function readFileAsync(filePath) {
    try {
        console.log('Reading file:', filePath);
        const data = await fs.readFile(filePath, 'utf8');
        console.log('File content:', data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

readFileAsync('./sample.txt');  

fs.readFile('./sample.txt', 'utf8')
    .then(data => {
        console.log('File content:', data);
    })
    .catch(error => {
        console.error('Error reading file:', error);
    });

async function writeFileAsync(filePath, content) {
    try {
        console.log('Writing to file:', filePath);
        await fs.writeFile(filePath, content, { flag: 'a' });
        console.log('File written successfully');
        const data = await fs.readFile(filePath, 'utf8'); 
        console.log('Updated file content:', data);
    } catch (error) {
        console.error('Error writing file:', error);
    }
}
writeFileAsync('./sample.txt', 'This is the updated content need to write.\n');