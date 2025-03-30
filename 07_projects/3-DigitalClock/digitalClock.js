clock = document.querySelector('#clock');

setInterval(function () {  // This callback function is running after every 1000 ms or 1 second.
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);  // So whatever is inside this function is running after every second.
