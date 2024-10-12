import {Command} from "commander";
import {select} from "@inquirer/prompts";
import {titleCase} from '../utils/formatters.js';
import {getViewList} from "../api/views.js";
import chalk from "chalk";

export const add = new Command()
    .name("add")
    .description("add a view or component to you're app")
    .action(async () => {
        await handleViewAdd()
    })

add
    .command("view")
    .description("add a new view")
    .action(async () => {
        await handleViewAdd()
    })

add
    .command("component")
    .description("add a new component")
    .action(async () => {
        const componentName = await promptComponent()

    })

async function promptView() {
    const viewList = await getViewList()
    process.stdout.write('\x1Bc');

    if (viewList.length === 0) {
        console.log(chalk.red("Seems like you exceeded github limit"))
        return
    }

    console.log(chalk.blue("⚡️ View Kit"), "- let's add some views\n")
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

async function handleViewAdd() {
    process.stdout.write('\x1Bc');

    const viewName = await promptView()
    const viewFileUrl = `https://raw.githubusercontent.com/veilag/view-kit/main/source/views/${viewName}/${titleCase(viewName)}.jsx`
    const filePath = `./views/Dashboard.jsx`
}