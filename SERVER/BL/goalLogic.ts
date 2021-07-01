import { isConstructorDeclaration } from "typescript";

const DISTANCE = 0.1; //km
const DISTANCE2 = 1;

export const calcIfGoal = (lat1:number,lon1:number,lat2:number,lon2:number)=>{
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2-lat1);  // deg2rad below
  const dLon = deg2rad(lon2-lon1); 
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const d = R * c; // Distance in km
  return d<DISTANCE;
}

export const randomGoalMarkerLocation = (lat:number, lon:number)=>
{
  const sign= Math.random()>0.5?1:-1; //check if positive or negative
  const lon2=Math.random()*180*sign; 
  const r = Math.pow(DISTANCE2,2)
  const xDistance=Math.pow(lon-lon2,2)
  console.log(r,xDistance);
  const lat2= -((Math.sqrt(r-xDistance))-lat)
  return {location:{longtitude:lon2,latitude:lat2}}
}

const deg2rad=(deg:number)=> {
  return deg * (Math.PI/180)
}
