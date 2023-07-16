import { Routes, Route, NavLink, } from "react-router-dom"

import HomeAnunciante from "./pages/home-anunciante"
import HomeRolezeiro from "./pages/home-rolezeiro"
import RegisterEvent from "./pages/register-event"
import Startup from "./pages/startup"
import Header from "./components/header"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path="/rolezeiro" element={<Header currentPage="rolezeiro"/>} >
          <Route index element={<HomeRolezeiro />} />
        </Route>
        <Route path="/anunciante" element={<Header currentPage="anunciante"/>}>
          <Route index element={<HomeAnunciante />} />
          <Route path="register-event" element={<RegisterEvent />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
