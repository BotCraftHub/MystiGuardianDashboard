import {GuildMenuStyle} from "../styles";

type props = {
    guild: {
        id: string,
        name: string,
        icon: string,
    }
}

export const GuildMenuItem = ({guild}: props) => <GuildMenuStyle>
    <img src={guild.icon} alt={guild.name}/>
    <p>{guild.name}</p>
</GuildMenuStyle>