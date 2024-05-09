import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scences/homePage";
import LoginPage from "scences/loginPage";
// import Navbar from "scences/navbar";
import ProfilePage from "scences/profilePage";

function App() {
  

  return (
    <>
     <div className="app">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<HomePage/>} />
           <Route path="/loginPage" element={<LoginPage/>} />
           {/* <Route path="/navbar" element={<HomePage/>} /> */}
           <Route path="/profile/:userId" element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
