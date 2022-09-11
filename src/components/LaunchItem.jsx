import { BiCalendarAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function LaunchItem(launch) {
  return (
    <LaunchItemStyle>
       <Link to={`/launch/${launch.flight_number}`}>
       
    <div className="launchDiv" key={launch.flight_number}>
      <h2>
        {launch.mission_name} ({launch.launch_year})
      </h2>
      <div className="infoDiv">
      <a>
        {launch.launch_date_local.split("T")[0]}
      </a>
      <p>
        <a>Rocket: {launch.rocket.rocket_name} </a>
      </p>
      <p>
      <a>
        Crew: {launch.crew ? "Yes" : "No"}
      </a>
      </p>
      <a className={launch.launch_success ? "succesL" : "failureL"}>
        {launch.launch_success ? "Succes" : "Failure"}
      </a>
      </div>
    
    

     

      
    </div>
    </Link>
    </LaunchItemStyle>
  );
}


const LaunchItemStyle = styled.div`
a {
  text-decoration: none;
}
.launchDiv h2{
  margin-bottom:0.6rem;
}
.launchDiv {
  display: flex;
  flex-direction: column;
  background-color: #161616;
  width: 300px;
  margin: 1rem;
  padding: 2rem;
  border-radius: 25px;
  color:white;
  text-align:start;
  box-shadow: -2px -2px 16px 6px rgba(0,0,0,0.22);
-webkit-box-shadow: -2px -2px 16px 6px rgba(0,0,0,0.22);
-moz-box-shadow: -2px -2px 16px 6px rgba(0,0,0,0.22);
}
.launchDiv:hover{
  background-color: #2D2D2D;
}
a,p{
  margin:0.8rem 0rem
}

.infoDiv{
  margin:0.5rem 0rem;
}

.failureL {
  margin: 0.7rem 0rem 0.3rem 0rem;
  padding: 2px 15px;
  border-radius: 15px;
  width: fit-content;
  background-color: #631010;
}
.succesL {
  margin: 0.3rem 0rem;
  padding: 2px 15px;
  border-radius: 15px;
  width: fit-content;
  background-color: #106318;
}

`;

/* rocket constiner */


