import fs from "fs";
import path from "path";

export const getConfig = () => {
    const configPath = path.join(process.cwd(), 'view.kit.json')

    if (fs.existsSync(configPath)) {
        const data = fs.readFileSync(configPath, 'utf-8')
        return JSON.parse(data)
    }

    return undefined
}