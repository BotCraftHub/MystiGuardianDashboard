import {useContext} from "react";
import {GuildContext} from "../utils/context/GuildContext";
import {CategoryStyle, Container} from "../styles";

export const Category = () => {
    const {guildId} = useContext(GuildContext)
    return <CategoryStyle>Category Page {guildId}</CategoryStyle>
}