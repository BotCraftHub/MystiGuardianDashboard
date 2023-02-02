import {useContext} from "react";
import {GuildContext} from "../utils/context/GuildContext";
import {Container} from "../styles";

export const Category = () => {
    const {guildId} = useContext(GuildContext)
    return <div style={{padding: "3.125em 0"}}>
        <Container>
            <h1>Category</h1>
            <p>guildId: {guildId}</p>
        </Container>
    </div>
}