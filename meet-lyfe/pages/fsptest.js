import fs from 'fs';
import path from 'path';
export default function fsptest()
{
    const file_data = fs.promises.readFileSync(path.join(process.cwd(), 'data/data.json'))//path.join(path.dirname((__dirname)), 'data.json'))
    const json_data = JSON.parse(file_data);
    return(
        <div>
            {json_data}
        </div>
    )
}