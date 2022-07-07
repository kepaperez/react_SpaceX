import logo from './img/spacex-logo-1.png'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import { LaunchesList } from './components/LaunchesList';
import { LaunchDetails } from './components/LaunchDetails';
import { HomePage } from './components/HomePage';
export function App() {


  return (
    <>
    <img src={logo} width="300px"/>
    <Routes>
    <Route path="/" element={<HomePage />}/>
      <Route path="/launches" element={<LaunchesList />}/>
      <Route path="launch/:launchId" element={<LaunchDetails />}/>
    </Routes>
    </>
  )
}

