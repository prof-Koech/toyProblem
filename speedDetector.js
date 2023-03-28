// function 
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmDemeritPoint = 5;
  
    if (speed <= speedLimit) {
      console.log("Ok");
      return;
    }
  
    //variable declaration
    const points = Math.floor((speed - speedLimit) / kmDemeritPoint);
  
    if (points >= 12) {
      console.log("License suspended");
    } else {
      console.log("Points: " + points);
    }
  }
  checkSpeed(80); //function checkSpeed is called