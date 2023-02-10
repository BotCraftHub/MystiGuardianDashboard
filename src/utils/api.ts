import axis, {AxiosRequestConfig} from 'axios';
import {User} from "./types";

let clientId = process.env.DISCORD_AUTH_CLIENT_ID
let serviceUrl = process.env.SERVICE_URL
let state = process.env.DISCORD_AUTH_STATE
let link = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${serviceUrl}&response_type=code&scope=identify+guilds&state=${state}&prompt=none`
const CONFIG: AxiosRequestConfig = {withCredentials: true}

export const getAuthStatus = () => axis.get<User>(link + 'status', CONFIG)

export const getAuthLogin = () => link