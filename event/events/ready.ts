import Botty from "../../Botty";
import Event from "../Event";
export = new Event({
    name: "ready",
    execute: (client: Botty) => {
        console.log(`Logged in as ${client.user?.username}!`);
        client.user?.setActivity({name: `SHEEEEEEEEEEEEESH🥶🥶🥶`, type: "PLAYING"})
    }
});