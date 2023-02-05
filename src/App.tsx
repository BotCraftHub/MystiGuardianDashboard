import React, {useState} from 'react';
import {Route, Routes} from "react-router";
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Category} from "./pages/Category";
import {SetLanguage} from "./pages/config/SetLanguagePage";
import {GuildContext} from "./utils/context/GuildContext";
import {AppBar} from "./components/AppBar";
import {EnableOrDisableFunctions} from "./pages/config/EnableOrDisableFunctions";
import {SetMessages} from "./pages/config/SetMessages";

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
            <Route path="/dashboard/language" element={<SetLanguage/>}/>
            <Route path="/dashboard/enable-or-disable-functions" element={<EnableOrDisableFunctions/>}/>
        </Routes>
    </GuildContext.Provider>
}

export default App;
