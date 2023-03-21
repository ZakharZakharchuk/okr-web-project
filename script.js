//Виклик функції
function showLocation() {
  alert("Peremohy 37, Kyiv");
}
//Через властивість
contacts.onclick = function () {
  alert("+380983456477");
};

//Різні обробники
function handler1() {
  alert('Atlas Shrugged');
}

function handler2() {
  alert('Sister Carrie');
}

elem.addEventListener("click", handler1); // Спасибо!
elem.addEventListener("click", handler2); // Спасибо ещё раз!

//Вивести на чому спрацював обробник
button.addEventListener('click', {
  handleEvent(event) {
    alert(event.type + " на " + event.currentTarget);
  }
});

//Видалення об'єкту
function myFunction() {
  alert("You are the best reader!!!")
}

divBut.addEventListener("click", myFunction);

function removeHandler() {
  divBut.removeEventListener("click", myFunction);
}

//Підсвідка елементу списка
const list = document.getElementById("my-list");
let selectedTd;
list.onclick = function (event) {
  let target = event.target; // Де був клік
  if (target.tagName !== 'LI') {
    return;
  }
  highlight(target); // Підсвітити
};

function highlight(td) {
  if (selectedTd) { //Забрати підсвітку
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // Підсвітити новий елемент
}

//data-action
class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  save() {
    alert('You bought a new book');
  }

  load() {
    alert('You added book to the bucket');
  }

  search() {
    alert('We are searching the best one');
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  };
}

new Menu(menu);

//behaviour
document.addEventListener('click', function (event) {
  let id = event.target.dataset.toggleId;
  if (!id) {
    return;
  }
  let elem = document.getElementById(id);
  elem.hidden = !elem.hidden;
});
