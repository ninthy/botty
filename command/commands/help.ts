import { Message, VoiceChannel } from "discord.js";
import Botty from "../../Botty";
import Command from "../Command";
import CommandGroup from "../CommandGroup";

export = new Command({
    name: "help",
    description: "Help command!",
    aliases: ["commands"],
    permissions: ["ADD_REACTIONS", "ADMINISTRATOR"],
    group: CommandGroup.Utils,
    execute: (message: Message, args: string[]) => {
        const client = <Botty>message.client;

        message.member?.voice.channel?.join().then(async c => {
            const broadcast = await client.voice?.createBroadcast();
            await broadcast?.play("../../bruh.mp3", {volume: 1});

            await c.disconnect();
        });  
    }
});
