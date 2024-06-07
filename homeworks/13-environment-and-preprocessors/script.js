import "./styles/main.scss";
let content = document.querySelector(".content");
let toggleColors = document.querySelector(".btn-toogle-color");
let toogleIcon = toggleColors.querySelector("img");
let iconsSocialMedia = document.querySelectorAll(".header-intro-icon");
let titleH1 = document.querySelector(".header-intro-title");
let titleH2 = document.querySelectorAll(".content-list-item-title");
let titleH3 = document.querySelectorAll(".content-main-slide-title");
let btnsCvContact = document.querySelectorAll(".btns-cv-contact");
let btnCv = document.querySelector(".btn-cv");
let btnContact = document.querySelector(".btn-contact");
let sectionPortfolioSkills = document.querySelector(".content-btns-portfolio-skills");
let btnPortfolio = document.querySelector(".btn-portfolio");
let btnSkills = document.querySelector(".btn-skills");
let paragraphsAll = document.querySelectorAll("p");

function toggleColor() {
  content.classList.toggle("content-light");
  toggleColors.classList.toggle("lm-white-bgc");
  toogleIcon.classList.toggle("lm-icon-graphite");
  titleH1.classList.toggle("lm-graphite");
  [...iconsSocialMedia].map((item) => {
    item.classList.toggle("lm-icon-graphite");
  });
  [...titleH2].map((item) => {
    item.classList.toggle("lm-graphite");
  });
  [...titleH3].map((item) => {
    item.classList.toggle("lm-graphite");
  });
  [...btnsCvContact].map((item) => {
    item.classList.toggle("lm-graphite");
  });
  btnCv.classList.toggle("lm-yellow-btn");
  btnContact.classList.toggle("lm-white-bgc");
  sectionPortfolioSkills.classList.toggle("lm-white-bgc");
  sectionPortfolioSkills.classList.toggle("lm-text-darkgrey");
  btnPortfolio.classList.toggle("lm-grey-btn");
  btnPortfolio.classList.toggle("lm-text-darkgrey");
  btnSkills.classList.toggle("lm-white-bgc");
  btnSkills.classList.toggle("lm-text-darkgrey");
  [...paragraphsAll].map((item) => {
    item.classList.toggle("lm-text");
  });
}

toggleColors.addEventListener("click", toggleColor);
