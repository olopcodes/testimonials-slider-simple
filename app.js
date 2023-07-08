// the slide will just move once left and right
const arrowButtons = document.querySelector(".testimonials__arrow-btns");
const testimonialsWrapper = document.querySelector(".testimonials__wrapper");
const circleButtons = document.querySelectorAll(
  ".testimonials__circle-btns .circle"
);

disabledButton(0);

arrowButtons.addEventListener("click", (e) => {
  if (e.target.parentElement.id === "next-btn") {
    // move right
    onClickNext();
  } else if (e.target.parentElement.id === "prev-btn") {
    // move left
    onClickPrev();
  }
});

circleButtons[1].addEventListener("click", onClickNext);

circleButtons[0].addEventListener("click", onClickPrev);

function removeClassName(element, name) {
  element.classList.remove(name);
}

function addClassName(element, name) {
  element.classList.add(name);
}

function disabledButton(num) {
  arrowButtons.querySelectorAll("button")[num].classList.add("disabled");
  arrowButtons.querySelectorAll("button")[num].disabled;
}

function removeDisable(num) {
  arrowButtons.querySelectorAll("button")[num].classList.remove("disabled");
  arrowButtons.querySelectorAll("button")[num].disabled = false;
}

function onClickNext() {
  addClassName(testimonialsWrapper, "slideLeft");
  removeClassName(testimonialsWrapper, "slideRight");

  addClassName(circleButtons[1], "circle--active");
  removeClassName(circleButtons[0], "circle--active");

  disabledButton(1);
  removeDisable(0);
}

function onClickPrev() {
  addClassName(testimonialsWrapper, "slideRight");
  removeClassName(testimonialsWrapper, "slideLeft");

  addClassName(circleButtons[0], "circle--active");
  removeClassName(circleButtons[1], "circle--active");

  disabledButton(0);
  removeDisable(1);
}
// shift cards

// show circles active, change on circle click
