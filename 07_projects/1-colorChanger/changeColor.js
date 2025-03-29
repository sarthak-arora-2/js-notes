const buttons = document.querySelectorAll('.button');
buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    switch (event.target.id) {
      case 'grey':
        document.body.style.backgroundColor = event.target.id;
        break;
      case 'white':
        document.body.style.backgroundColor = event.target.id;
        break;
      case 'blue':
        document.body.style.backgroundColor = event.target.id;
        break;
      case 'yellow':
        document.body.style.backgroundColor = event.target.id;
        break;
      default:
        break;
    }
  });
});
