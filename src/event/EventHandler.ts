import Botty from "../Botty";
import * as fs from 'fs';
import * as path from "path";
import Event from "./Event";
class EventHandler {
    client: Botty;
    constructor(client: Botty) {
        this.client = client;
        this.loadEvents();
    }
    
    loadEvents() {
        fs.readdirSync(path.join(__dirname, "events")).filter(file => file.endsWith(".js")).forEach(e => {
            const event = require(path.join(__dirname, "events", e)) as Event;
            this.client.on(event.name, (...args) => event.execute(this.client, ...args));
            console.log(`${event.name} loaded. ✔️`);
            
        });
    }
}

export = EventHandler;