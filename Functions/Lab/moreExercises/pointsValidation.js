function pointsValidation(arr){

    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    let cartesianCoordinateSystemX1 = 0;
    let cartesianCoordinateSystemY1 = 0;
  
    if (x1 === 0 && y1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
      } else if (isDistanceValid(x1, y1, cartesianCoordinateSystemX1, cartesianCoordinateSystemY1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
      } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
      }
    
      if (x2 === 0 && y2 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
      } else if (isDistanceValid(x2, y2, cartesianCoordinateSystemX1, cartesianCoordinateSystemY1)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
      } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
      }

    if(getDistance(x1, y1, x2,y2)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {${y2}, ${y2}} is invalid`);
    }

    function getDistance(a, b, c, d){
        let calculateDistanceBetweenPoints = Math.sqrt((c - a) ** 2 + (d - b) ** 2)
        if(Number.isInteger(calculateDistanceBetweenPoints)){
            return true;
        }else {
            return false;
        }
    }

}

  pointsValidation([0, 0, 0, 0]);
  