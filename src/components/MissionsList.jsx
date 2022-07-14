import { useState, useEffect } from "react";
import * as API from "../service/launches";

export function MissionsList() {
  const [missions, setMissions] = useState([]);
  useEffect(() => {
    API.getAllMissions().then(setMissions);
  }, []);

  return (
    <>
       <h1>Missions Space X</h1>
      {missions.length == 0 ? (
        <div className="">
          <div class="spinner"></div>
        </div>
      ) : (
        <div className="">
          {missions.map((mission) => (
            <h4>{mission.mission_name}</h4>
          ))}
        </div>
      )} 
    </>
  );
}
