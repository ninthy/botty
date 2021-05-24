import { Message, Permissions, TextChannel, PermissionString } from "discord.js";
import config from "../../config.json";
import Botty from "../Botty";
import CommandGroup from "./CommandGroup";

interface Cmd {
    name: string;
    description: string;
    group: CommandGroup;
    execute: (message: Message, args: string[]) => any;
    permissions?: PermissionString[];
    aliases?: string[];
    nsfw?: boolean;
    dm?: boolean;
    usage?: string;
    admin?: boolean;
    owner?: boolean;
}
class Command {
    name: string;
    description: string;
    group: CommandGroup;
    execute: (message: Message, args: string[]) => any;
    permissions: PermissionString[];
    aliases: string[];
    nsfw: boolean;
    dm: boolean;
    usage: string;
    admin: boolean;
    owner: boolean;
    
    constructor({name, description, execute, group, aliases=[], nsfw=false, permissions=[], dm=false, usage="", admin=false, owner=false}: Cmd) {
        this.name = name;
        this.description = description;
        this.aliases = aliases;
        this.nsfw = nsfw;
        this.permissions = permissions;
        this.dm = dm;
        this.usage = usage;
        this.group = group;
        this.execute = execute;
        this.admin = admin;
        this.owner = owner;
    }
    
    executeCommand = (message: Message, args: string[]) => {
        if (!(message.channel as TextChannel).nsfw == this.nsfw) return message.channel.send("You need to enable NSFW to execute this command :c");
        if (this.owner && !(config.owner as string[]).includes(message.author.id)) return;
        this.execute(message, args);
    }
}


export default Command;