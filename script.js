//рух елементу
let book = document.getElementById("book");
book.onmousedown = function (event) {
  let shiftX = event.clientX - book.getBoundingClientRect().left;
  let shiftY = event.clientY - book.getBoundingClientRect().top;
  book.style.position = 'absolute';
  book.style.zIndex = 1000;
  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    book.style.left = pageX - shiftX + 'px';
    book.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);
  book.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    book.onmouseup = null;
  };
};
book.ondragstart = function () {
  return false;
};

//наведення миші
let images = document.querySelectorAll(".images");

// перебирання всіх елементів та додавання подій
images.forEach(function(image) {
  image.addEventListener("mouseover", function(event) {
    event.target.setAttribute("style", "width: 200px;");
  });

  image.addEventListener("mouseout", function(event) {
    event.target.setAttribute("style", "width: 150px;");
  });
});
