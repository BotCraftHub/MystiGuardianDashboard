import React, {useState} from 'react';
import {Route, Routes} from "react-router";
import {LoginPage} from "./pages/LoginPage";
import {Menu} from "./pages/Menu";
import {Dashboard} from "./pages/Dashboard";
import {GuildContext} from "./utils/context/GuildContext";
import {CallbackPage} from "./pages/onboarding/Callback";
import {getCookie} from "./utils/Cookies";
import {Sidebar} from "./components/SideBar";
import {AppBar} from "./components/AppBar";
import {Guild} from "./entites/Guild";
import {SetChannel} from "./pages/config/SetChannel";

//Provider will be used to provide the context to the children
function App() {
    const [guild, setGuild] = useState<Guild>();
    //state variable and function to update the state
    const updateGuild = (guild: Guild) => setGuild(guild);

    //if access token exists in cookies, redirect to dashboard
    //if not, redirect to login page

    const jwt = getCookie("jwt")

    if (jwt === "" || jwt === undefined || jwt == null) {
        return <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/onboarding/callback" element={<CallbackPage/>}/>
        </Routes>
    } else {
        return <GuildContext.Provider value={{guild, updateGuild}}>
            <Routes>
                <Route path="/dashboard/*" element={<AppBar/>}/>
            </Routes>
            <Routes>
                <Route path="/dashboard/*" element={<Sidebar/>}/>
            </Routes>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/dashboard/channel" element={<SetChannel/>}/>
                <Route path="/onboarding/callback" element={<CallbackPage/>}/>
            </Routes>
        </GuildContext.Provider>
    }
}

export default App;
