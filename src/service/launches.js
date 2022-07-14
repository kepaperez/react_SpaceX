const API_URL ="https://api.spacexdata.com/v3";

export async function getAllLaunches(){
    try{
        const response = await fetch(`${API_URL}/launches`);
        const data = await response.json();
        return data;

    }catch(error){
    console.error(error);
    }
}

export async function getAllRockets(){
    try{
        const response = await fetch(`${API_URL}/rockets`);
        const data = await response.json();
        return data;

    }catch(error){
    console.error(error);
    }
}

export async function getAllMissions(){
    try{
        const response = await fetch(`${API_URL}/missions`);
        const data = await response.json();
        return data;

    }catch(error){
    console.error(error);
    }
}


export async function getLauncheByFlightNumber(flightNumber){
    try{
        const response = await fetch(`${API_URL}/launches/${flightNumber}`);
        const data = await response.json();
        return data;

    }catch(error){
    console.error(error);
    }
}