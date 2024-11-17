import React from "react"
import Home from "./Home"
import About from "./About"
import Things from "./Things"
import Services from "./Services"
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import {ThemeProvider} from "styled-components"
import { GlobalStyle } from "./GlobalStyle"
import Ticket from "./Ticket"
import Booking from "./Booking"

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      // text: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      // helper: "#8490ff",
      helper: "#212529",
      // bg: "rgb(250 249 255)"
      // bg: "#EDE3FF",
      bg: "#fbaed2",
      footer_bg: "##fbaed2",
      btn: "#fff",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  }
  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/monuments" element={<About/>}/>
          <Route path="/things" element={<Things/>}/>
          <Route path="/hotel" element={<Services/>}/>
          <Route path="/buy-ticket" element={<Ticket/>}/>
          <Route path="/Laxmi-Palace-book" element={<Booking/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
