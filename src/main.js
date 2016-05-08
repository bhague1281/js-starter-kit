import {inc, dec} from './actions';
import '../stylesheets/main.scss';

window.onload = () => {
  let number = document.getElementById('number');
  let incBtn = document.getElementById('inc');
  let decBtn = document.getElementById('dec');

  incBtn.addEventListener('click', () => {
    number.innerHTML = inc(+number.innerHTML);
  }, false);

  decBtn.addEventListener('click', () => {
    number.innerHTML = dec(+number.innerHTML);
  }, false);

  fetch('http://omdbapi.com/?s=saw')
  .then(response => response.json())
  .then(data => console.log(data));
};
