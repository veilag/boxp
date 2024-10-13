import {Command} from "commander";
import fs from "node:fs";
import chalk from "chalk";
import {presetsPath} from "../utils.js";

export const init = new Command()
    .name("init")
    .description("initialize Box Package")
    .action(async () => {
        if (fs.existsSync(presetsPath)) {
            console.log(chalk.green("✔"), "Box package already initialized")
            return
        }

        fs.writeFileSync(presetsPath, JSON.stringify({}))
        console.log(chalk.green("✔"), "Box package initialized")
        console.log(`You can find you're presets in ${presetsPath}`)
    })
