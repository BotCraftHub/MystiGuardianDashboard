import {AppBarStyle, AppBarTitle} from "../styles";

export const AppBar = () => {
    return <AppBarStyle>
        <AppBarTitle/>
        <AppBarTitle>Config</AppBarTitle>
        <img src="https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png" alt="logo" height={55}
             width={55} style={{borderRadius: "50%"}}/>
    </AppBarStyle>
}