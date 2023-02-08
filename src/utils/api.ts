import axis, {AxiosRequestConfig} from 'axios';

let port = process.env.PORT
let publicUrl = process.env.PUBLIC_URL
let link = `${publicUrl}:${port}/api/auth/`
const CONFIG: AxiosRequestConfig = {withCredentials: true}

export const getAuthStatus = () => axis.get(link + 'status', CONFIG)