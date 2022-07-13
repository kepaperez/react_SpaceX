import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import { LaunchesList } from './components/LaunchesList';
import { LaunchDetails } from './components/LaunchDetails';
import { HomePage } from './components/HomePage';
import { Nav } from './components/Nav';
export function App() {


  return (
    <>
    <Nav />
    <Routes>
    <Route path="/" element={<HomePage />}/>
      <Route path="/launches" element={<LaunchesList />}/>
      <Route path="launch/:launchId" element={<LaunchDetails />}/>
    </Routes>
    </>
  )
}

