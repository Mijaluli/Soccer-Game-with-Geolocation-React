import { calcIfGoal, randomGoalMarkerLocation } from "./BL/goalLogic";
import express from 'express';

const PORT = process.env.PORT || 3001;
const app = express();


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

app.get("/randomLocation", (req:express.Request<any,any,any,{lon:string,lat:string}>, res:express.Response) => {  
  const {lon,lat}=req.query;
  const location = randomGoalMarkerLocation(parseFloat(lon),parseFloat(lat));
  res.send(location);
});

app.get("/isGoal", (req:express.Request<any,any,any,{lonCurrent:string,latCurrent:string,lonGoal:string,latGoal:string}>, res:express.Response) => {
  const {lonCurrent,latCurrent,lonGoal,latGoal}=req.query;
  if(!lonCurrent||!latCurrent||!lonGoal||!latGoal)
    {
      console.log('error');
      res.sendStatus(404);
      return;
    }
  const location = calcIfGoal(parseFloat(latCurrent),parseFloat(lonCurrent),parseFloat(latGoal),parseFloat(lonGoal));
  res.send(location);
});


