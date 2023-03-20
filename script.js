function showLocation() {
  alert("Peremohy 37, Kyiv");
}

contacts.onclick = function () {
  alert("098098098098");
};

function handler1() {
  alert('Спасибо!');
};

function handler2() {
  alert('Спасибо ещё раз!');
}

elem.addEventListener("click", handler1); // Спасибо!
elem.addEventListener("click", handler2); // Спасибо ещё раз!

button.addEventListener('click', {
  handleEvent(event) {
    alert(event.type + " на " + event.currentTarget);
  }
});

divBut.addEventListener("click", myFunction);

function removeHandler() {
  divBut.removeEventListener("click", myFunction);
}

function myFunction() {
  alert("Hello")
}

/*const list = document.getElementById("my-list");
list.onclick = function (event) {
  event.target.style.backgroundColor = 'yellow';
};*/

const list = document.getElementById("my-list");
let selectedTd;
list.onclick = function (event) {
  let target = event.target; // где был клик?
  if (target.tagName !== 'LI') {
    return;
  } // не на TD? тогда не интересует
  highlight(target); // подсветить TD
};

function highlight(td) {
  if (selectedTd) { // убрать существующую подсветку, если есть
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // подсветить новый td
}

class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  save() {
    alert('сохраняю');
  }

  load() {
    alert('загружаю');
  }

  search() {
    alert('ищу');
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  };
}

new Menu(menu);
