import { inc, dec } from './actions';
import '../stylesheets/main.scss';

window.onload = () => {
  const number = document.getElementById('number');
  const incBtn = document.getElementById('inc');
  const decBtn = document.getElementById('dec');

  incBtn.addEventListener('click', () => {
    number.innerHTML = inc(+number.innerHTML);
  }, false);

  decBtn.addEventListener('click', () => {
    number.innerHTML = dec(+number.innerHTML);
  }, false);
};
