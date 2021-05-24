import { Message } from "discord.js";
import Botty from "../../Botty";
import Command from "../Command";
import CommandGroup from "../CommandGroup";

export = new Command({
    name: "eval",
    description: "Eval command!",
    group: CommandGroup.Utils,
    owner: true,
    execute: (message: Message, args: string[]) => {
        if (args.length < 0) return;
        message.channel.send(eval(args[0]));
    }
});
