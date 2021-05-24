import { ClientEvents } from "discord.js";
import Botty from "../Botty";

interface Evnt {
    name: string;
    execute: (client: Botty, ...args: any[]) => void;
}

class Event {
    name: string;
    execute: (client: Botty, ...args: any[]) => void;

    constructor({name, execute}: Evnt) {
        this.name = name;
        this.execute = execute;
    }
}

export default Event;