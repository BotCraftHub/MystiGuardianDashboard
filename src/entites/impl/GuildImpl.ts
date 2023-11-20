import {Guild} from "../Guild";

export class GuildImpl implements Guild {
    id: string;
    idAsLong: number;
    name: string;
    icon: string;
    isBotInGuild: boolean;

    constructor(id: string, json: any) {
        this.id = id;
        this.idAsLong = Number(id);
        this.name = json.name;
        this.icon = json.icon;
        this.isBotInGuild = json.bot_in_guild;
    }
}
