// Code your solution in this file!
const distanceFromHqInBlocks = (distance) =>{
  if(distance > 42){
    return distance - 42;
  }
  else{
    return 42 - distance;
  }
}

const distanceFromHqInFeet = (distance) =>{
  let feet = distanceFromHqInBlocks( distance );
  return feet * 264;
}

const distanceTravelledInFeet = (loci, destination) => {
  if ( destination > loci){
   return  ( destination - loci ) * 264;
  }
  else{
    return ( loci - destination ) * 264;
  }
}

const calculatesFarePrice = (loci, destination) => {
   const distance = distanceTravelledInFeet(loci, destination);
   if(distance <= 400) {
      return 0;
   } else if(distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
   } else if(distance > 2000 && distance <= 2500) {
      return 25;
   } else {
      return 'cannot travel that far';
   }
}