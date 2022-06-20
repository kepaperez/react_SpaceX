import {useState, useEffect} from "react";
import logo from './img/spacex-logo-1.png'
import * as API from "./service/launches"
import {LaunchItem} from "./components/LaunchItem"


export function App() {
  const[launches,setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  },[]);

  return (
    <>
    <img src={logo} width="300px"/>
    <h1>Lauches Space X</h1>
    <div className="launchContainer">
    {launches.map(launch => (
      <LaunchItem  key={launch.flight_number} {...launch}/>
    ))}
   </div>
    </>
  )
}

