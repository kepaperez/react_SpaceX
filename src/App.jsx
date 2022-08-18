import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import { LaunchesList } from './components/LaunchesList';
import { LaunchDetails } from './components/LaunchDetails';
import { RocketsList } from './components/RocketsList';
import { HomePage } from './components/HomePage';
import { MissionsList } from './components/MissionsList';
import { Navbar } from './components/Navbar';
import styled from "styled-components";

export function App() {


  return (
    <>
  <Navbar/>
    <Routes>
    <Route path="/" element={<HomePage />}/>
      <Route path="/launches" element={<LaunchesList />}/>
      <Route path="launch/:launchId" element={<LaunchDetails />}/>
      <Route path="/rockets" element={<RocketsList />}/>
      <Route path="/missions" element={<MissionsList />}/>
    
    </Routes>
    </>
  )
}

