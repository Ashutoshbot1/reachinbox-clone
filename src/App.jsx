import { useState } from "react";
import "./App.scss";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import OneboxPage from "./Pages/OneboxPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/onebox" element={<OneboxPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
