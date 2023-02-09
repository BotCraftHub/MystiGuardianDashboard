import axis, {AxiosRequestConfig} from 'axios';
import {User} from "./types";

let port = process.env.PORT
let publicUrl = process.env.PUBLIC_URL
let link = `${publicUrl}:${port}/api/auth/`
const CONFIG: AxiosRequestConfig = {withCredentials: true}

export const getAuthStatus = () => axis.get<User>(link + 'status', CONFIG)

export const getAuthLogin = () => link + 'login'