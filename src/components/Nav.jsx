import logo from '../img/spacex-logo-1.png'
import { Routes, Route, Link, } from "react-router-dom";

export function Nav(){
  
    return(
        <>
        <img src={logo} width="300px"/>
        <li>
          <Link to="/">History</Link>
        </li>
        <li>
          <Link to="/launches">Launches</Link>
        </li>
        <li>
          <Link to="/rockets">Rockets</Link>
        </li>
        <li>
          <Link to="/missions">Missions</Link>
        </li>
        </>
        
    )
}
