import { useParams } from "react-router-dom"
import * as API from '../service/launches'
import { useState,useEffect } from "react";
export function LaunchDetails(){
    const[launch,setLaunch] = useState({});

    let {launchId} = useParams();

    useEffect(() => {
        API.getLauncheByFlightNumber(launchId)
        .then(setLaunch)
        .catch(err => console.log(err))
    },[launchId])
 
    return(
       <div>Hola{JSON.stringify(launch)}</div> 
    )
}