import React from 'react';

import Home from "./components/HomeComponent/Home";
import Resume from "./components/ResumeComponent/Resume";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path={`/`} element={<Home />} />
            <Route exact path={`/resume`} element={<Resume />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
