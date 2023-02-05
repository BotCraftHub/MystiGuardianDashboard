import React, {useState} from 'react';
import {Route, Routes} from "react-router";
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Category} from "./pages/Category";
import {GuildContext} from "./utils/context/GuildContext";
import {AppBar} from "./components/AppBar";
import {SetMessages} from "./pages/config/SetMessages";
import {Meta} from "./pages/config/Meta";
import {Moderation} from "./pages/config/Moderation";

//Provider will be used to provide the context to the children
function App() {
    const [guildId, setGuildId] = useState("")

    //state variable and function to update the state
    const updateGuildId = (guildId: string) => setGuildId(guildId)

    return <GuildContext.Provider value={{guildId, updateGuildId}}>
        <Routes>
            <Route path="/dashboard/*" element={<AppBar/>}/>
        </Routes>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/dashboard/categories" element={<Category/>}/>
            <Route path="/dashboard/messages" element={<SetMessages/>}/>
            <Route path="/dashboard/meta" element={<Meta/>}/>
            <Route path="/dashboard/moderation" element={<Moderation/>}/>
        </Routes>
    </GuildContext.Provider>
}

export default App;
