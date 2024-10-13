import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import ora from "ora";
import {exec} from "node:child_process";
import chalk from "chalk";

export const presetsPath = path.join(os.homedir(), '.boxpackage.presets.json')

export function getPresets() {
    const presetsData = fs.readFileSync(presetsPath, 'utf-8')
    return JSON.parse(presetsData)
}

export function savePresets(presets) {
    fs.writeFileSync(presetsPath, JSON.stringify(presets, null, 2))
}

export function installPackages(packages) {
    const packagesAsArgument = packages.join(" ")

    const spinner = ora("Installing packages")
    spinner.start()

    exec(`npm install ${packagesAsArgument}`, (error) => {
        if (error) {
            spinner.fail()
            console.error(`Error installing preset: ${error.message}`);
            return;
        }

        spinner.succeed()
        console.log(chalk.green("✔"), `Preset installed`)
    })
}