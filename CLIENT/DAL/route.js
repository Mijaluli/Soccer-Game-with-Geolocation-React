import axios from 'axios'

const getLocation=()=>{
    axios.get("localhost:3001/getLocation",{params:{lon,lat}}).then()
}

const isGoal=()=>{
    axios.get("localhost:3001/isGoal",{params:{latCurrent,latCurrent,lonIsGoal,latIsGoal}}).then()
}