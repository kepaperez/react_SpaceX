import { useState, useEffect } from "react";
import * as API from "../service/launches";
import { LaunchItem } from "../components/LaunchItem";

export function LaunchesList() {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <h1>Lauches Space X</h1>
      {launches.length == 0 ? (
        <div className="launchContainer">
          <div class="spinner"></div>
        </div>
      ) : (
        <div className="launchContainer">
          {launches.map((launch) => (
            <LaunchItem key={launch.flight_number} {...launch} />
          ))}
        </div>
      )}
    </>
  );
}
