function calculateForceOnIncline(
    massInKg,
    heightInMeters,
    lengthOfInclineInMeters
  ) {
    if (
      typeof massInKg !== "number" ||
      typeof heightInMeters !== "number" ||
      typeof lengthOfInclineInMeters !== "number"
    ) {
      return null;
    }
  
    if (massInKg < 0 || heightInMeters < 0 || lengthOfInclineInMeters < 0) {
      return null;
    }
  
    var gravityAcceleration = 9.8;
  
    var force = gravityAcceleration * massInKg;
  
    var force = (force * heightInMeters) / lengthOfInclineInMeters;
  
    return Number(force.toFixed(0));
  }
  
  function testCalculateForceOnIncline() {
    if (calculateForceOnIncline(3, "banana", 5) !== null) {
      return false;
    }
  
    if (calculateForceOnIncline(3, -8, 2) !== null) {
      return false;
    }
  
    if (calculateForceOnIncline(3, 3, 3) !== 29) {
      return false;
    }
  
    return true;
  }
  
  if (testCalculateForceOnIncline() === false) {
    console.log("The calculateForceOnIncline function is wrong.");
  } else {
    console.log("The calculateForceOnIncline function works fine!");
  }
  