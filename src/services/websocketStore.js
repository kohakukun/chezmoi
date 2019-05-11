import { WsProtocol } from "../models/wsProtocol";

export class WebsocketStore {

    constructor() {
        this.connect();
    }

    async connect() {
        this.ws = new WebSocket('ws://localhost:8999');


        this.ws.onopen = this.onopen.bind(this);
        this.ws.onmessage = this.onmessage.bind(this);
        this.ws.onclose = this.onclose.bind(this);
        this.ws.onerror = this.onerror.bind(this);
    }

    async onopen(event) {
        console.log('Connected to websocket', event, this.ws);
    }

    async onmessage(event) {
        const data = JSON.parse(event.data);
        console.log('Response from ws: ', data);

    }

    async onclose(event) {
        console.log('Connection to websocket closed.');
    }

    async onerror(event) {
        console.log('>>> onerror: ', event);
    }

    async send(data) {
        const msg = JSON.stringify(data);
        this.ws.send(msg);
    }

    async createUser(data) {
        this.send(new WsProtocol("create_user", { data: data }));
    }
}