import { Collection, Message } from "discord.js";
import * as fs from 'fs';
import * as path from "path";
import Botty from "../Botty";
import Command from "./Command";

class CommandHandler {
    client: Botty;
    commands: Collection<string, Command>;

    constructor(client: Botty) {
        this.client = client;
        this.commands = client.commands;
        this.loadCommands();
    }
    
    loadCommands = () => {
        fs.readdirSync(path.join(__dirname, "commands")).filter(file => file.endsWith(".js")).forEach(e => {
            const command = require(path.join(__dirname, "commands", e)) as Command;
            console.log(`${command.name} loaded. ✔️`);
            this.commands.set(command.name, command);
        });
    }

    execute = (name: string, message: Message, args: string[]) => {

        if (!this.commands.has(name) && !this.commands.some(cmd => cmd.aliases?.includes(name))) return message.channel.send(`I couldn't found \`${name}\` :c`).then(m => m.delete({timeout: 3000}));
        const command = this.commands.get(name) || this.commands.find(cmd => cmd.aliases && cmd.aliases.includes(name));
        command?.executeCommand(message, args);
    }
    
}


export default CommandHandler;