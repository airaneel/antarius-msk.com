import { readdirSync, statSync, writeFileSync } from 'fs';
import { extname as _extname, basename, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const collectImageFiles = (directoryPath, fileList = []) => {
    const items = readdirSync(directoryPath);

    items.forEach(item => {
        const fullPath = resolve(directoryPath, item);
        const stats = statSync(fullPath);

        if (stats.isDirectory()) {
            // Recursively collect files from subdirectories
            collectImageFiles(fullPath, fileList);
        } else {
            const extname = _extname(item).toLowerCase();
            if (['.jpg', '.png', '.gif'].includes(extname)) {
                fileList.push(fullPath);
            }
        }
    });

    return fileList;
};

const generateTypes = (directoryPath) => {
    const imageFiles = collectImageFiles(directoryPath);

    const typeEntries = imageFiles.map(file => {
        const relativePath = file.replace(`${directoryPath}/`, '').replace(/\//g, '/');
        const fileNameWithoutExt = basename(file, _extname(file));
        return `  ${fileNameWithoutExt}: '@assets/img/${relativePath}';`;
    });

    const typeDefinitions = `type ImagePaths = {\n${typeEntries.join('\n')}\n};\n\nexport default ImagePaths;\n`;

    globalThis.console.log(typeDefinitions); // Print to console for debugging

    writeFileSync(resolve(directoryPath, 'imageTypes.d.ts'), typeDefinitions, 'utf8');
};

// Specify the path to your directory here
const imagesDirectory = resolve(__dirname, '../assets/img');

generateTypes(imagesDirectory);
