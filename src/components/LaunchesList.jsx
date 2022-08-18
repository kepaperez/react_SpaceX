import { useState, useEffect } from "react";
import * as API from "../service/launches";
import { LaunchItem } from "../components/LaunchItem";

import styled from "styled-components";

export function LaunchesList() {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
    <Container>
      <h1>Launches Space X</h1>
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
      </Container>
    </>
  );
}

const Container = styled.div`
margin-top:80px;
background-color:#0E0E0E;
text-align:center;
min-height:100vh;

launchContainer{
  
  display:flex;
  justify-content:center;
  align-items: center;
  
}
h1{
  padding:7rem;
  color:white;
  font-weight: 100;
}
.launchContainer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}`
;