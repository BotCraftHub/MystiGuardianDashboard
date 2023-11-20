import {Guild} from "../entites/Guild";
import {GuildImpl} from "../entites/impl/GuildImpl";

export let clientId = process.env.REACT_APP_CLIENT_ID;
export let redirectUrl = process.env.REACT_APP_REDIRECT_URL;
export let botApiUrl = process.env.REACT_APP_BOT_API;
export let botInviteUrl = process.env.REACT_APP_BOT_INVITE_URL;

export const getAuthLogin = () => {
    if (clientId === undefined || redirectUrl === undefined) {
        throw new Error("clientId or redirectUrl or clientSecret is undefined");
    }

    //check if the redirect url is formatted correctly if not format it like http%3A%2F%2Flocalhost%3A3000%2Fonboarding%2

    let unformattedRedirectUrl = redirectUrl;
    if (!unformattedRedirectUrl.includes("%3A")) {
        unformattedRedirectUrl = unformattedRedirectUrl.replace(":", "%3A");
    }

    if (!unformattedRedirectUrl.includes("%2F")) {
        unformattedRedirectUrl = unformattedRedirectUrl.replace("/", "%2F");
    }

    let formattedRedirectUrl = unformattedRedirectUrl;

    return `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${formattedRedirectUrl}&response_type=code&scope=identify%20guilds&state=random`;
};

export function handleGuild(json: any): Guild | null {
    try {
        return new GuildImpl(json.id, json);
    } catch (error) {
        alert("error while handling guilds: " + error);
        throw new Error("error while handling guilds: " + error);
    }
}