import {getCookie} from "./Cookies";
import {Channel} from "../entites/Channel";
import {ChannelImpl} from "../entites/impl/ChannelImpl";
import {botApiUrl} from "./api";

export const fetchAuditChannel = async (guildId: string): Promise<Channel | null> => {
    const response = await fetch(botApiUrl + "/audit-channel?guildId=" + guildId, {
        method: "GET",
        headers: {
            Authorization: `jwt ${getCookie("jwt")}`,
        }
    });

    const json = await response.json();

    const stringifiedJson = JSON.stringify(json);

    if (stringifiedJson === "{}") {
        return null;
    } else {
        return new ChannelImpl(json.id, json);
    }
}
