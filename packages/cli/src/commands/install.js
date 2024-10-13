import {Command} from "commander";
import chalk from "chalk";
import {getPresets, installPackages} from "../utils.js";

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
