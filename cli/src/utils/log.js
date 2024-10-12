import chalk from "chalk";

export const clearConsole = () => {
    process.stdout.write('\x1Bc');
}

export const printTitle = (message) => {
    console.log(chalk.blue("⚡️ View Kit"), "- " + message + "\n")
}