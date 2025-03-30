const randomColor = function () {  // Generate random color in hexadecimal e.g. #B123D5
    hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {  // Checks if intervalId is null then setInterval.
      intervalId = setInterval(function () {
        document.body.style.backgroundColor = randomColor();
      }, 1000);
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;  // setting intervalId as null to free the space.
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  