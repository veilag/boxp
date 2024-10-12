import {Command} from "commander";
import {select} from "@inquirer/prompts";

export const add = new Command()
    .name("add")
    .description("add a view or component to you're app")

add
    .command("view")
    .description("add a new view")
    .action(async () => {
        const viewName = await promptView()
        console.log(viewName)
    })

add
    .command("component")
    .description("add a new component")
    .action(async () => {
        const componentName = await promptComponent()
        console.log(componentName)
    })

async function promptView() {
    return select({
        message: "Choice view from list",
        choices: ["dashboard", "auth"]
    });
}

async function promptComponent() {
    return select({
        message: "Choice component from list",
        choices: ["dashboard", "auth"]
    });
}