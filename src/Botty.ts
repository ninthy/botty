import { Client, Collection } from "discord.js";
import  Command  from "./command/Command";
import CommandHandler  from "./command/CommandHandler";
import EventHandler from "./event/EventHandler";

class Botty extends Client {
    commands: Collection<string, Command>;
    commandHandler: CommandHandler;
    eventHandler: EventHandler;
    constructor() {
        super();
        this.commands = new Collection();
        this.commandHandler = new CommandHandler(this);
        this.eventHandler = new EventHandler(this);
    }
    
    
}

export default Botty;