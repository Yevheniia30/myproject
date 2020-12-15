import '../timer.css';

const template = `
<div class="timer card">
<button class="btn btn-danger stop">STOP</button>
<span class="value">15</span>
<button class="btn btn-success start">START</button>
</div>`;

class Timer {
  constructor(selector) {
    //#timer
    this.container = document.querySelector(selector);

    this.container.insertAdjacentHTML('beforeEnd', template);
  }
}

export default Timer;
