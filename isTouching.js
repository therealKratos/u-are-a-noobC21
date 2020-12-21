function isTouching(rap1,song1){

    if (rap1.x - song1.x < song1.width/2 + rap1.width/2
      && song1.x - rap1.x < song1.width/2 + rap1.width/2
      && rap1.y - song1.y < song1.height/2 + rap1.height/2
      && song1.y - rap1.y < song1.height/2 + rap1.height/2) {
   return true; 
  }
  else {
    return false;
    
  }
  
  
  
  }