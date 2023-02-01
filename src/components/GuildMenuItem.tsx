import {GuildIcon, GuildMenuStyle} from "../styles";

type props = {
    guild: {
        id: string,
        name: string,
        icon: string,
    }
}

export const GuildMenuItem = ({guild}: props) => <GuildMenuStyle>
    <GuildIcon src={guild.icon} alt={guild.name} width={50} height={50}/>
    <p>{guild.name}</p>
</GuildMenuStyle>