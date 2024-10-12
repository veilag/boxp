import {Command} from "commander";
import {select} from "@inquirer/prompts";
import {titleCase} from '../utils/formatters.js';
import {getViewList} from "../api/views.js";
import chalk from "chalk";
import {clearConsole, printTitle} from "../utils/log.js";
import {getConfig} from "../utils/config.js";

export const add = new Command()
    .name("add")
    .description("add a view or component to you're app")
    .action(async () => {
        const config = getConfig()
        if (config === undefined) {
            clearConsole()
            console.log("Run viewkit init using", chalk.underline("viewkit init"))
            return
        }

        await handleViewAdd(config)
    })

add
    .command("view")
    .description("add a new view")
    .action(async () => {
        const config = getConfig()
        if (config === undefined) {
            clearConsole()
            console.log("Run viewkit init using", chalk.italic("viewkit init"))
            return
        }

        await handleViewAdd(config)
    })

add
    .command("component")
    .description("add a new component")
    .action(async () => {
        const config = getConfig()
        if (config === undefined) {
            clearConsole()
            console.log("Run viewkit init using", chalk.italic("viewkit init"))
            return
        }

        const componentName = await promptComponent()
    })

async function promptView() {
    const viewList = await getViewList()
    clearConsole()

    if (viewList.length === 0) {
        console.log(chalk.red("Seems like you exceeded github limit"))
        return
    }

    printTitle("let's add some views")
    return select({
        message: "Choice view from list",
        choices: viewList.map(view => view.name)
    });
}

async function promptComponent() {
    return select({
        message: "Choice component from list",
        choices: ["dashboard", "auth"]
    });
}

async function handleViewAdd(config) {
    clearConsole()
    const viewName = await promptView()

    const viewFileUrl = `https://raw.githubusercontent.com/veilag/view-kit/main/source/views/${viewName}/${titleCase(viewName)}${config.language === "javascript" ? '.jsx' : '.tsx'}`
    const viewConfigFileUrl = `https://raw.githubusercontent.com/veilag/view-kit/main/source/views/${viewName}/config.json`


}