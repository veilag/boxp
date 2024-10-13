import {Command} from "commander";
import os from "node:os";
import fs from "node:fs";
import path from "node:path";
import chalk from "chalk";

export const init = new Command()
    .name("init")
    .description("initialize Box Package")
    .action(async () => {
        const presetsPath = path.join(os.homedir(), '.boxpackage.presets.json')
        fs.writeFileSync(presetsPath, JSON.stringify({}))

        console.log(chalk.green("✓"), "Box package initialized")
        console.log(`You can find you're presets in ${presetsPath}`)
    })
