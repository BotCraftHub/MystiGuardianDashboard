import {useContext} from "react";
import {GuildContext} from "../utils/context/GuildContext";

export const Category = () => {
    const {guildId} = useContext(GuildContext)
    return <div>Category Page {guildId}</div>
}