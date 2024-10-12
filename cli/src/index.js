#!/usr/bin/env node
import {Command} from "commander"
import {add} from "./commands/add.js";

async function main() {
    const program = new Command()
        .name("view-kit")
        .description("adds reusable views and components to you're app")
        .version(
            "1.0.0",
            "-v, --version",
            "display the version number")

    program.addCommand(add)
    program.parse()
}

main()
