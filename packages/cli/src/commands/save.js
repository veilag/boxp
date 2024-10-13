import {Command} from "commander";
import {input} from "@inquirer/prompts";
import chalk from "chalk";
import {getPresets, savePresets} from "../utils.js";


export const save = new Command()
    .name("save")
    .argument("name", "Preset name")
    .description("save packages to preset")
    .option('-p, --packages <packages...>', 'List of npm packages to pack')
    .action(async (name, options) => {
        const presets = getPresets()
        if (presets.hasOwnProperty(name)) {
            const answer = await input({
                message: "Preset with this name already exists, do you want to rewrite it (y/n)"
            })
            if (answer === "n") return
        }

        presets[name] = {
            packages: options.packages
        }

        savePresets(presets)
        console.log(chalk.green("✔"), chalk.bold("Preset saved"))
    })

