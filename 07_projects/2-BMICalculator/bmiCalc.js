const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    const weightGuide = document.querySelector('#weight-guide');
    const divToRemove = document.querySelector('.guide');
    if (divToRemove !== null) {  // if already a div containing weight guide text is present then we remove that div.
      divToRemove.remove();
    }
    const div = document.createElement('div');
    div.className = 'guide';
    if (bmi < 18.6) {
      // const text = document.createTextNode(`For ${bmi} bmi : Under Weight`);
      // div.appendChild(text);
      div.innerHTML = `For ${bmi} bmi : Under Weight`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      // const text = document.createTextNode(`For ${bmi} bmi : Normal Range`);
      // div.appendChild(text);
      div.innerHTML = `For ${bmi} bmi : Normal Range`;
    } else {
      // const text = document.createTextNode(`For ${bmi} bmi : Overweight`);
      // div.appendChild(text);
      div.innerHTML = `For ${bmi} bmi : Overweight`;
    }
    weightGuide.insertBefore(div, weightGuide.firstChild);
    // console.log(document.querySelector('.guide'));
    // console.log(document.querySelectorAll('.guide'));
  }
});
