const bodyHome = document.getElementById("body") as HTMLBodyElement;
const footer = document.getElementById("footerHome") as HTMLDivElement;
const searchBar = document.getElementById("search") as HTMLInputElement;
const searchBtn = document.getElementById("searchBtn") as HTMLButtonElement;

const btnNext = document.createElement("button") as HTMLButtonElement;
btnNext.setAttribute("id", "btnproximo");
btnNext.innerHTML = ">";

const btnPrevious = document.createElement("button") as HTMLButtonElement;
btnPrevious.setAttribute("id", "btnvoltar");
btnPrevious.innerHTML = "<";

const skeleton = document.getElementById('skeleton') as HTMLDivElement

export {
  bodyHome,
  footer,
  btnNext,
  btnPrevious,
  searchBar,
  searchBtn,
  skeleton
};
