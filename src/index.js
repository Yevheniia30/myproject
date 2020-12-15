import throttle from 'lodash.throttle';
import { uuid } from 'uuidv4';
import createBox from '../js/practice-box';
import './styles.css';
import Timer from './js/timer';

//  TIMER
const timer = new Timer({
  selector: '#timer',
  value: 10,
});

new Timer({
  selector: '#timer2',
  value: 20,
});
new Timer({
  selector: '#timer3',
  value: 30,
});

import './js/modal';
import './js/siema';
// import './js/timer';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
