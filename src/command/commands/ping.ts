import Discord, { Message } from "discord.js";

import Botty from "../../Botty";
import Command from "../Command";
import CommandGroup from "../CommandGroup";

export = new Command({
	name: "ping",
	description: "a",
	group: CommandGroup.Utils,
	execute: (message: Message, args: string[]) => {
		const ping = message.client.ws.ping;
		message.channel.startTyping();
		setTimeout(() => {
			message.channel.send(`🏓 ...pong in **${ping}**ms`);
			message.channel.stopTyping();
		}, ping);
	}
});
