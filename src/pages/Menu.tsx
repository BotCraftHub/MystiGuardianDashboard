import {mockGuilds} from "../mocks/guild";
import {useNavigate} from "react-router";
import {useContext} from "react";
import {GuildContext} from "../utils/context/GuildContext";
import {GuildMenuItem} from "../components/GuildMenuItem";

export const Menu = () => {
    const navigate = useNavigate()
    //context keeps track of the guildId
    const {updateGuildId} = useContext(GuildContext)
    return <div>
        {/* <ul>
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
        </ul> */}
        <h1> Select a Server</h1>
        <div>
            {
                mockGuilds.map((guild) => <GuildMenuItem guild={guild}/>)
            }
        </div>
    </div>
}