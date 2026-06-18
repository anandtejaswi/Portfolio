const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'images');
const excludeFiles = ['resume-icon.png', 'Certification.png'];

async function convertImages() {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file.endsWith('.png') && !excludeFiles.includes(file)) {
            const inputPath = path.join(dir, file);
            const outputPath = path.join(dir, file.replace(/\.png$/, '.jpg'));
            
            console.log(`Converting ${file} to JPG...`);
            try {
                await sharp(inputPath)
                    // If image has transparency, flatten it with a white background
                    .flatten({ background: { r: 255, g: 255, b: 255 } })
                    .jpeg({ quality: 85, mozjpeg: true })
                    .toFile(outputPath);
                
                // Delete original PNG
                fs.unlinkSync(inputPath);
                console.log(`Successfully converted ${file} and removed original.`);
            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        }
    }
}

convertImages();
