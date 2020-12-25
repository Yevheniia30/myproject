const clockRef = document.querySelector('.js-clockface');
const startRef = document.querySelector('button[data-action-start]');
const stopRef = document.querySelector('button[data-action-stop]');

const timer = {
  intervalId: null,
  start() {
    const startTime = Date.now();

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      //   console.log(deltaTime);

      updateClockface(deltaTime);
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
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
