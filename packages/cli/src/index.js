#!/usr/bin/env node
import {Command} from "commander"
import {init} from "./commands/init.js";
import {save} from "./commands/save.js";
import {install} from "./commands/install.js";

async function main() {
    const program = new Command()
        .name("boxp")
        .description("you're way to customize presets")
        .version(
            "1.0.0",
            "-v, --version",
            "display the version number")

    program.addCommand(init).addCommand(save).addCommand(install)
    program.parse()
}

main()
