import {Command} from "commander";
import fs from "fs";
import {select, input} from "@inquirer/prompts";
import chalk from "chalk";
import {clearConsole, printTitle} from "../utils/log.js";
import path from "path";

export const init = new Command()
    .name("init")
    .description("initialize view-kit in you're app")
    .action(async () => {
        const configPath = path.join(process.cwd(), 'view.kit.json')

        if (fs.existsSync(configPath)) {
            clearConsole()

            const answer = await input({
                message: "View Kit already initialized, do you want to initialized it from scratch? (yes/no)"
            })

            if (answer === "no") {
                clearConsole()
                return
            }
        }

        clearConsole()
        printTitle("just like design constructor, but for developers")
        const config = await promptConfig()

        fs.writeFile(configPath, JSON.stringify(config, null, 2), (err) => {
            if (err) {
                console.error('Error while creating config file:', err);
            } else {
                console.log(
                    chalk.green('View kit successfully initialized'),
                    '\n\nUsage:',
                    chalk.italic('\n    viewkit add view'),
                    chalk.italic('\n    viewkit add components'),
                );
            }
        });
    })


async function promptConfig() {
    const config = {}

    config.language = await select({
        message: "Select language",
        choices: ["javascript", "typescript"]
    })
    clearConsole()

    config.viewsPath = await input({
        message: "Set views folder path",
        default: "src/views"
    })
    clearConsole()

    config.componentsPath = await input({
        message: "Set components folder path",
        default: "src/components/viewkit"
    })
    clearConsole()

    return config
}