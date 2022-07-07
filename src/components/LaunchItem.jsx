import { BiCalendarAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

export function LaunchItem(launch){
    return(
          <div className="launchDiv" key={launch.flight_number}>
            <h2>{launch.mission_name} ({launch.launch_year})</h2>
           <a> <BiCalendarAlt />{launch.launch_date_local.split("T")[0]}</a>
            <a className={launch.launch_success ? "succesL" : "failureL"}>{launch.launch_success? "Succes" : "Failure"}</a>
            <p><a>Rocket: {launch.rocket.rocket_name} </a></p>

           <Link to={`/launch/${launch.flight_number}`}> <button>More Details</button></Link>
          </div>
    )
}