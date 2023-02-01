import {AppBarStyle} from "../styles";

export const AppBar = () => {
    return <AppBarStyle>
        <h1>Configuration</h1>
        <img src="https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png" alt="logo" height={55}
             width={55} style={{borderRadius: "50%"}}/>
    </AppBarStyle>
}