import { getCookie } from "./Cookies";
import { getBotApiUrl } from "./api";
import { DbGuildUrls } from "./enums";

export const updateAntiSpoilerSettings = async (guildId: string, status : boolean) => {
    fetch(getBotApiUrl() + DbGuildUrls.ANTI_SPOILER, {
        method: 'POST',
        headers: {
            'AUTHORIZATION': 'Bearer ' + getCookie('access_token'),
            'guildId': guildId,
            'antiSpoiler': status.toString()
        }
    })
    .catch(error => {
        alert(error);
    }
    );
};