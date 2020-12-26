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
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    const startTime = Date.now();

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      // console.log(deltaTime);

      updateClockface(deltaTime);
    }, 1000);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
    this.intervalId = null;
    // обнуляет при нажатии стоп
    updateClockface(0);
  },
};

timer.start();

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
const pad = value => {
  return String(value).padStart(2, '0');
};

startRef.addEventListener('click', timer.start.bind(timer));
stopRef.addEventListener('click', timer.stop.bind(timer));
