import React, {useState} from 'react';
import {Route, Routes} from "react-router";
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Category} from "./pages/Category";
import {SetWelcomeMessage} from "./pages/config/SetWelcomeMessgePage";
import {SetLeaveMessage} from "./pages/config/SetLeaveMessagePage";
import {SetLanguage} from "./pages/config/SetLanguagePage";
import {EnableOrDisableWelcomeMessage} from "./pages/config/EnableOrDisbaleWelcomeMessagePage";
import {GuildContext} from "./utils/context/GuildContext";
import {AppBar} from "./components/AppBar";

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
            <Route path="/dashboard/welcome-message" element={<SetWelcomeMessage/>}/>
            <Route path="/dashboard/leaving-message" element={<SetLeaveMessage/>}/>
            <Route path="/dashboard/language" element={<SetLanguage/>}/>
            <Route path="/dashboard/welcome-message-intermittent" element={<EnableOrDisableWelcomeMessage/>}/>
        </Routes>
    </GuildContext.Provider>
}

export default App;
