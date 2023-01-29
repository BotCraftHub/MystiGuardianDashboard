import React from 'react';
import {Route, Routes} from "react-router";
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Category} from "./pages/Category";
import {SetWelcomeMessage} from "./pages/config/SetWelcomeMessgePage";
import {SetLeaveMessage} from "./pages/config/SetLeaveMessagePage";
import {SetLanguage} from "./pages/config/SetLanguagePage";
import {EnableOrDisableWelcomeMessage} from "./pages/config/EnableOrDisbaleWelcomeMessagePage";

function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/categories" element={<Category />} />
    <Route path="/guild/set-welcome-message" element={<SetWelcomeMessage />} />
    <Route path="/guild/set-leaving-message" element={<SetLeaveMessage />} />
    <Route path="/guild/set-language" element={<SetLanguage />} />
    <Route path="/guild/enable-or-disable-welcome-message" element={<EnableOrDisableWelcomeMessage />} />
  </Routes>
}

export default App;
