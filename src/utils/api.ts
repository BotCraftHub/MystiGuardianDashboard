import axis, {AxiosRequestConfig} from 'axios';
import {User} from "./types";
import configData from "../security/config.json";


let clientId = configData.REACT_APP_DISCORD_AUTH_CLIENT_ID
let websiteUrl = window.location.hostname+"/menu"
let link = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${websiteUrl}&response_type=code&scope=identify%20guilds`
const CONFIG: AxiosRequestConfig = {withCredentials: true}

export const getAuthStatus = () => axis.get<User>(link + 'status', CONFIG)

export const getAuthLogin = () => link