// --------------SETINTERVAL-------------
var i = 0;
for (var i = 0; i < 10; i += 1) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}
// -----this------
const obj = {
  name: 'Bobby',
  sayHello() {
    console.log(this.name);
  },
};

setTimeout(obj.sayHello.bind(obj), 1000);

// --------------CLOCK TIMER-------------
const clockRef = document.querySelector('.js-clockface');
const startRef = document.querySelector('button[data-action-start]');
const stopRef = document.querySelector('button[data-action-stop]');

const timer = {
  start() {},
  stop() {},
};

// -----преобразование UNIX во время
const updateClockface = time => {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  clockRef.textContent = `${hours}:${mins}:${secs}`;
};

// -----преобразование 0:0:1 в 00:00:01

console.log(new Date().getUTCDate());
// console.log(utch);

// --------HNY SCRIPT
class HappyNewYear {
  constructor(year, wishes) {
    this.year = year;
    this.wishes = wishes;
    console.log(this.year);
  }

  sayCongrats() {
    console.log(`C Новым ${this.year} Годом, друзья!`);
    console.log(`Желаю всем сохранить ${this.wishes}`);
  }
}

const currentYear = Number(new Date().getFullYear());
const wishes = ['здоровье', 'любовь', 'вдохновение', 'энтузиазм'];

const party = new HappyNewYear(currentYear + 1, wishes);

party.sayCongrats();
