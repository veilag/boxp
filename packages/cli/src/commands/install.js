import {Command} from "commander";
import {exec} from "node:child_process";
import chalk from "chalk";
import {getPresets} from "../utils.js";
import ora from "ora";

export const install = new Command()
    .name("install")
    .argument("name", "preset name")
    .description("installs packages from preset")
    .action(async (name) => {
        const presets = getPresets()
        if (!presets.hasOwnProperty(name)) {
            console.log(chalk.red("There is no preset with given name"))
        }

        const packages = presets[name]?.packages
        if (packages === undefined) {
            console.log(chalk.gray("There is no packages in given preset"))
            return
        }

        installPackages(packages)
    })

function installPackages(packages) {
    const packagesAsArgument = packages.join(" ")

    const spinner = ora("Installing packages")
    spinner.start()

    exec(`npm install ${packagesAsArgument}`, (error, stdout, stderr) => {
        if (error) {
            spinner.fail()
            console.error(`Error installing preset: ${error.message}`);
            return;
        }

        spinner.succeed()
        console.log(chalk.green("✔"), `Preset installed`)
    })
}