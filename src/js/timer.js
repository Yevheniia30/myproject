import '../timer.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

const template = value => `
<div class="timer card">
<button class="btn btn-danger stop" disabled >STOP</button>
<span class="value">${value}</span>
<button class="btn btn-success start">START</button>
</div>`;

class Timer {
  constructor({ selector, value = 0 }) {
    //#timer
    this.container = document.querySelector(selector);
    this.value = value;

    this.container.insertAdjacentHTML('beforeEnd', template(this.value));

    this.refs = {
      value: this.container.querySelector('.value'),
      startBtn: this.container.querySelector('.start'),
      stopBtn: this.container.querySelector('.stop'),
    };

    this.refs.stopBtn.addEventListener('click', this.stop.bind(this));
    this.refs.startBtn.addEventListener('click', this.start.bind(this));
    // this.start();
  }

  render() {
    this.refs.value.textContent = this.value;
  }

  start() {
    if (this.timerId) {
      return;
    }
    console.log('start');
    this.timerId = setInterval(() => {
      this.value += 1;

      this.render();
    }, 500);
    this.refs.stopBtn.removeAttribute('disabled');
    this.refs.startBtn.setAttribute('disabled', true);

    toastr.success('Have fun storming the castle!');
  }

  stop() {
    if (!this.timerId) {
      return;
    }
    console.log('stop');
    clearInterval(this.timerId);
    this.timerId = 0;
    this.refs.startBtn.removeAttribute('disabled');
    this.refs.stopBtn.setAttribute('disabled', true);

    toastr.error(
      'I do not think that word means what you think it means.',
      'Inconceivable!',
    );
  }
}

export default Timer;
