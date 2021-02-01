import throttle from 'lodash.throttle';
import { uuid } from 'uuidv4';
import createBox from '../js/practice-box';
import './styles.css';

function solution(str) {
  var splitString = str.split('');
  var reverseString = splitString.reverse();
  var joinString = reverseString.join('');
  //   return joinString;
  console.log(joinString);
}

solution('hello');

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

alert(fib(3));
alert(fib(7));
// import './js/localstorage';

// import './js/date';

// import './js/timer-async';

// import './js/promises';

// import './js/ajax';

// import './js/crud';

// import './js/fetch-todos';
// import Timer from './js/timer';
// import Todo from './js/todo';

// ============TODO LIST============
// const todo = new Todo({
//   selector: '#todo-list',
// });

//  =============TIMER==================
// const timer = new Timer({
//   selector: '#timer',
//   value: 10,
// });
// автоматичнский запуск
// timer.start();

// new Timer({
//   selector: '#timer2',
//   value: 20,
// });

// new Timer({
//   selector: '#timer3',
//   value: 30,
// });

// import './js/templating';

// import './js/modal';
// import './js/siema';
// import './js/timer';

// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
