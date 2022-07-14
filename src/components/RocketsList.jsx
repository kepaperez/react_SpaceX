import { useState, useEffect } from "react";
import * as API from "../service/launches";

export function RocketsList() {
  const [rockets, setRockets] = useState([]);
  useEffect(() => {
    API.getAllRockets().then(setRockets);
  }, []);

  return (
    <>
       <h1>rockets Space X</h1>
      {rockets.length == 0 ? (
        <div className="">
          <div class="spinner"></div>
        </div>
      ) : (
        <div className="">
          {rockets.map((rocket) => (
            <h4>{rocket.rocket_name}</h4>
          ))}
        </div>
      )} 
    </>
  );
}
