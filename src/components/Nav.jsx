import logo from "../img/spacex-logo-1.png";
import { Routes, Route, Link } from "react-router-dom";
import React, {useState, useEffect} from 'react'

export function Nav() {
  return (
    <>
      <nav>
      <img  src={logo} width="200px" />
        <ul className="list">
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
        </ul>
        <button className="btn">BTN</button>
      </nav>
    </>
  );
}
