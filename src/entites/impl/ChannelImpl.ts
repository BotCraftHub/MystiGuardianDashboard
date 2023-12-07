import {Channel} from "../Channel";

export class ChannelImpl implements Channel {

    id: string;
    idAsLong: number;
    name: string;
    type: number;

    constructor(id: string, json: any) {
        this.id = id;
        this.idAsLong = Number(id);
        this.name = json.name;
        this.type = json.type;
    }
}