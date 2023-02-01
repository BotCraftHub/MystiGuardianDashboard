import {mockGuilds} from "../mocks/guild";
import {useNavigate} from "react-router";
import {useContext} from "react";
import {GuildContext} from "../utils/context/GuildContext";
import {GuildMenuItem} from "../components/GuildMenuItem";
import {Container, MenuStyle} from "../styles";

export const Menu = () => {
    const navigate = useNavigate()
    //context keeps track of the guildId
    const {updateGuildId} = useContext(GuildContext)
    const handleClick = (guildId: string) => {
        updateGuildId(guildId)
        navigate(`/categories`)
    }
    return <MenuStyle>
        <Container>
            <h1>Select a Server</h1>
            <div>
                {

                    mockGuilds.map((guild) => (
                        <div onClick={() => {
                            handleClick(guild.id.toString())
                        }}>
                            <GuildMenuItem guild={guild}/>
                        </div>
                    ))
                }
            </div>
        </Container>
    </MenuStyle>
}