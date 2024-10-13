import fs from "node:fs";
import path from "node:path";
import os from "node:os";

export const presetsPath = path.join(os.homedir(), '.boxpackage.presets.json')

export function getPresets() {
    const presetsData = fs.readFileSync(presetsPath, 'utf-8')
    return JSON.parse(presetsData)
}

export function savePresets(presets) {
    fs.writeFileSync(presetsPath, JSON.stringify(presets, null, 2))
}