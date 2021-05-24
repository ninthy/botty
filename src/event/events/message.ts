import { Message } from "discord.js";
import Botty from "../../Botty";
import Event from "../Event";
const prefix = "botty ";
export = new Event({
    name: "message",
    execute: (client: Botty, message: Message) => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift()?.toLowerCase();
        
        client.commandHandler.execute(<string>command, message, args);
    
    }
});