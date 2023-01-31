import {createContext} from "react";

type GuildContextType = {
    guildId: string
    updateGuildId: (guildId: string) => void
}

export const GuildContext = createContext<GuildContextType>({
    //TODO: If we get the actual guild object, we can use it here
    guildId: "",
    updateGuildId: () => {}
})