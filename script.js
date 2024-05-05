function updateCompassHeading(heading) {
    const needle = document.querySelector('.needle');
    needle.style.transform = `translateX(-50%) rotate(${heading}deg)`;
  
    const directionElement = document.querySelector('.direction');
    const degreeElement = document.querySelector('.degree');
  
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const directionIndex = Math.round(heading / 45) % 8;
    const direction = directions[directionIndex];
  
    directionElement.textContent = direction;
    degreeElement.textContent = `${heading}°`;
  }
  
  function getRandomHeading() {
    return Math.floor(Math.random() * 360); // Generate a random heading between 0 and 359 degrees
  }
  
  // Update the compass heading every 1 second (for demonstration purposes)
  setInterval(function() {
    const heading = getRandomHeading();
    updateCompassHeading(heading);
  }, 1000);