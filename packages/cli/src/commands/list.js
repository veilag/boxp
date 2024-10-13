import {Command} from "commander";
import {getPresets, installPackages} from "../utils.js";
import {select, Separator} from "@inquirer/prompts";
import chalk from "chalk";

export const list = new Command()
    .name("list")
    .description("shows saved presets")
    .action(async () => {
        const presets = getPresets()
        if (Object.keys(presets).length === 0) {
            console.log(chalk.gray("There is no presets yet"))
            return
        }

        const presetName = await select({
            message: "Select preset to install",
            choices: [...Object.keys(presets), new Separator(), "exit"]
        })
        if (presetName === "exit") return

        const packages = presets[presetName]?.packages
        if (packages === undefined) {
            console.log(chalk.gray("There is no packages in given preset"))
            return
        }
        installPackages(packages)
    })
