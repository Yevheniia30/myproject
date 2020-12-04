import throttle from 'lodash.throttle';
import { uuid } from 'uuidv4';
import createBox from '../js/practice-box';
// import { add, calc } from '../js/calc';

// import uuidv4 from 'uuidv4';

import './styles.css';

const id = uuid();

document.body.appendChild(createBox('webpack is amazing!' + id));

console.log(throttle);
console.log(uuid);
// console.log(calc);
// console.log(mult);
