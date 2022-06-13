import React from 'react';

import Home from "./components/HomeComponent/Home";
import Resume from "./components/ResumeComponent/Resume";
import SemanticForm from "./components/ContactComponent/SemanticForm";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import SemanticHeader from "./components/HeaderComponent/SemanticHeader";
import SemanticNavbar from "./components/NavbarComponent/SemanticNavbar";

function App() {
  return (

    <BrowserRouter>
        <SemanticHeader />
        <SemanticNavbar/>
        <Routes>
            <Route exact path={`/`} element={<Home />} />
            <Route exact path={`/resume`} element={<Resume />} />
            <Route exact path={`/contact`} element={<SemanticForm />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
