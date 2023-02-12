import axis, {AxiosRequestConfig} from 'axios';
import {User} from "./types";


let clientId = process.env.CLIENT_ID
let redirectUrl = process.env.DISCORD_AUTH_REDIRECT_URL
let clientSecret = process.env.CLIENT_SECRET
let apiEndpoint = 'https://discord.com/api/v10'

const CONFIG: AxiosRequestConfig = {withCredentials: true}

export const getAuthStatus = () => axis.get<User>(getAuthLogin + 'status', CONFIG)

export const getAuthLogin = () => {
    if (clientId === undefined || redirectUrl === undefined || clientSecret === undefined) {
        throw new Error("clientId or redirectUrl or clientSecret is undefined")
    }
    return `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=identify%20guilds`
}