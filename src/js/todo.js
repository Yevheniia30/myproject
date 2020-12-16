const template = () => `<form class="form-inline">
    <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input
        type="text"
        
        class="form-control"
        id="staticEmail2"
        name="input"
        placeholder="Email"
    />
    </div>
    <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input
        type="password"
        class="form-control"
        id="inputPassword2"
        placeholder="Password"
    />
    </div>
    <button type="submit" class="btn btn-primary mb-2">
    Confirm identity
    </button>
</form>

<div class="list-group">
    
</div>`;

const listTemplate = value => `<a href="#" class="list-group-item list-group-item-action">
    ${value}
    </a>`;

class Todo {
  constructor({ selector }) {
    this.container = document.querySelector(selector);
    this.container.insertAdjacentHTML('beforeEnd', template());
    this.refs = {
      form: this.container.querySelector('.form-inline'),
      list: this.container.querySelector('.list-group'),
    };
    this.refs.form.addEventListener('submit', this.submitHandler.bind(this));

    this.items = [];
    this.loadData();
  }

  render() {
    this.refs.list.innerHTML = '';
    this.refs.list.insertAdjacentHTML(
      'beforeEnd',
      this.items.map(value => listTemplate(value)).join(''),
    );
  }

  loadData() {
    try {
      const items = JSON.parse(localStorage.getItem('todo')) || [];
      this.items = items;
      this.render();
    } catch (error) {
      localStorage.removeItem('todo');
    }
  }

  saveData() {
    localStorage.setItem('todo', JSON.stringify(this.items));
  }

  addItem(text) {
    this.items.push(text);
    this.render();
    this.saveData();
    this.loadData();
  }

  submitHandler(event) {
    event.preventDefault();

    // const text = event.target.elements.input.value;
    this.addItem(event.target.elements.input.value);
    event.target.elements.input.value = '';
    // console.log(text);
  }
}

export default Todo;
