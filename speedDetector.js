// function 
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmDemeritPoint = 5;
  
    if (speed <= speedLimit) {
      console.log("Ok");
      return;
    }
  
   
    const points = Math.floor((speed - speedLimit) / kmDemeritPoint); 
    //math.floor rounds to the nearest integer
  
    if (points >= 12) {
      console.log("License suspended");
    } else {
      console.log("Points: " + points);
    }
  }
  checkSpeed(80); //function called