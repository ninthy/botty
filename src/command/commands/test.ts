import { Message, VoiceChannel } from "discord.js";
import Botty from "../../Botty";
import Command from "../Command";
import CommandGroup from "../CommandGroup";

export = new Command({
    name: "test",
    description: "Test Command",
    group: CommandGroup.Utils,
    execute: (message: Message, args: string[]) => {

    }
});