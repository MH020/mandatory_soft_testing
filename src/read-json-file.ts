import fs from 'fs';
import path from 'path'


const filePath = path.resolve(process.cwd(), 'data/person.json');

function readFile() {
    try { 
        const data = fs.readFileSync(filePath, "utf8")
        const jsonData = JSON.parse(data)
        return jsonData

    } catch (error) {
    console.error('Error reading JSON file:', error);   
    }
}

export default readFile