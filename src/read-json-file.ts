import fs, { read } from 'fs';
import path from 'path'
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);

const filePath = path.join(__filename, '/../../../data/person.json');

function readFile() {
    try { 
        const data = fs.readFileSync(filePath, "utf8")
        console.log(data)
        const jsonData = JSON.parse(data)
        return jsonData

    } catch (error) {
    console.error('Error reading JSON file:', error);   
    }
}


console.log(readFile())

export default readFile