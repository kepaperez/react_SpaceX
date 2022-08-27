import { BiCalendarAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function LaunchItem(launch) {
  return (
    <LaunchItemStyle>
    <div className="launchDiv" key={launch.flight_number}>
      <h2>
        {launch.mission_name} ({launch.launch_year})
      </h2>
      <a>
        {" "}
        <BiCalendarAlt />
        {launch.launch_date_local.split("T")[0]}
      </a>
      <a className={launch.launch_success ? "succesL" : "failureL"}>
        {launch.launch_success ? "Succes" : "Failure"}
      </a>
      <p>
        <a>Rocket: {launch.rocket.rocket_name} </a>
      </p>

      <Link to={`/launch/${launch.flight_number}`}>
        {" "}
        <button>More Details</button>
      </Link>
    </div>
    </LaunchItemStyle>
  );
}


const LaunchItemStyle = styled.div`
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
a,p{
  margin:0.5rem 0rem
}
.launchDiv button {
  text-align:center;
  margin-top: 10%;
  width: 50%;
  padding: 0.5rem;
  border-radius: 25px;
  border: 0ch;
  background-color: rgb(196, 196, 196);
}

.failureL {
  margin: 0.3rem 0rem;
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


