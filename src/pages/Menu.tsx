import {mockGuilds} from "../mocks/guild";
import {useNavigate} from "react-router";
import {useContext} from "react";
import {GuildContext} from "../utils/context/GuildContext";

export const Menu = () => {
    const navigate = useNavigate()
    //context keeps track of the guildId
    const { updateGuildId } = useContext(GuildContext)
    return <div>
        <ul>
            {

                mockGuilds.map((guild) =>
                    <li onClick={() => {
                        updateGuildId(guild.id.toString())
                        navigate(`/categories`)
                    }}>
                        {guild.name}
                    </li>
                )
            }
        </ul>
    </div>
}