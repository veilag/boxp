#!/usr/bin/env node
import {Command} from "commander"
import {init} from "./commands/init.js";

async function main() {
    const program = new Command()
        .name("boxp")
        .description("you're way to customize presets")
        .version(
            "1.0.0",
            "-v, --version",
            "display the version number")

    program.addCommand(init)
    program.parse()
}

main()
