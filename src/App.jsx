import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import {  ThemeProvider, createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import HomePage from "./scences/homePage/HomePage.jsx";
import LoginPage from "./scences/loginPage/index.jsx"
// import HomePage from "scences/homePage/HomePage";
// import { ThemeProvider } from "@emotion/react";

function App() {

  const mode = useSelector((state)=>state.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])
  return (
    <>
     <div className="app">
      <BrowserRouter>
       <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
           <Route path="/" element={<HomePage/>} />
           <Route path="/loginPage" element={<LoginPage/>} />
           {/* <Route path="/navbar" element={<HomePage/>} /> */}
           {/* <Route path="/profile/:userId" element={<ProfilePage/>} /> */}
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
