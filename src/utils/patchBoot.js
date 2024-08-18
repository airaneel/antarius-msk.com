import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
function fixSassFiles(dir) {
    // Прочитать все файлы и папки в директории
    let files = readdirSync(dir);

    files.forEach(file => {
        let filePath = join(dir, file);

        // Проверить, является ли текущий элемент файлом или директорией
        if (statSync(filePath).isDirectory()) {
            // Рекурсивно вызвать функцию для поддиректорий
            fixSassFiles(filePath);
        } else if (extname(file) === '.scss') {
            // Обработать .scss файл
            const data = readFileSync(filePath, 'utf8');
            let fixedData = data.replace(/(\s*[^{};]+;\s*)(\n\s*[^{};]+\s*\{\s*)/g, '& { $1 }\n$2');

            if (fixedData !== data) {
                writeFileSync(filePath, fixedData, 'utf8');
                console.log(`Fixed: ${filePath}`);
            }
        }
    });
}

// Укажите путь к вашей директории с SCSS файлами
const scssDir = join(__dirname, '../../node_modules/bootstrap/scss');

// Запуск фиксации механизмом Sass файлов
fixSassFiles(scssDir);
