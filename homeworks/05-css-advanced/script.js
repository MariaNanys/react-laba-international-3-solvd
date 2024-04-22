let content = document.querySelector(".content");
let arrowScroll = document.querySelector(".content__arrow-icon");
let toggleColors = document.querySelector(".content__btn-toggle");
let toogleIcon = toggleColors.querySelector("img");
let iconsSocialMedia = document.querySelectorAll(".intro__icon");
let titleH1 = document.querySelector(".intro__title");
let titleH2 = document.querySelectorAll(".list__item-title");
let paragraphItemList = document.querySelector(".item-3__paragraph");
let titleH3 = document.querySelectorAll(".slide-title");
let btnsCvContact = document.querySelectorAll(".btns__cv-contact");
let btnCv = document.querySelector(".btn__cv");
let btnContact = document.querySelector(".btn__contact");
let sectionPortfolioSkills = document.querySelector(".btns__portfolio-skills");
let sectionPS = document.querySelector(".btns__bgc");
let btnPortfolio = document.querySelector(".btn__portfolio");
let btnSkills = document.querySelector(".btn__skills");
let slideBackground = document.querySelectorAll(".slide__background");
let paragraphsAll = document.querySelectorAll("p");
let listItems = document.querySelector(".main-slides").querySelectorAll("li");

function scrollUp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleColor() {
  document.body.classList.toggle("content-light");
  toggleColors.classList.toggle("lm__white-bgc");
  toogleIcon.classList.toggle("lm__icon-graphite");
  titleH1.classList.toggle("lm__graphite");
  [...iconsSocialMedia].map((item) => {
    item.classList.toggle("lm__icon-graphite");
  });
  [...titleH2].map((item) => {
    item.classList.toggle("lm__graphite");
  });
  [...titleH3].map((item) => {
    item.classList.toggle("lm__graphite");
  });
  [...btnsCvContact].map((item) => {
    item.classList.toggle("lm__graphite");
  });
  btnCv.classList.toggle("lm__white-bgc");
  btnContact.classList.toggle("lm__white-bgc");
  sectionPortfolioSkills.classList.toggle("lm__white-bgc");
  sectionPortfolioSkills.classList.toggle("lm__text-darkgrey");
  btnPortfolio.classList.toggle("lm__grey-btn");
  btnPortfolio.classList.toggle("lm__text-darkgrey");
  btnSkills.classList.toggle("lm__white-bgc");
  btnSkills.classList.toggle("lm__text-darkgrey");
  [...paragraphsAll].map((item) => {
    item.classList.toggle("lm__text");
  });
}
let widthWithMargin = window.innerWidth;
let leftPos = 0;
function animationColor() {
  if(document.body.classList.contains('content-light')) {
    sectionPS.style.backgroundColor = "#FFE071";
    btnPortfolio.style.backgroundColor = "white";
    btnSkills.style.backgroundColor = "white";
  } else {
    sectionPS.style.backgroundColor = "white";
    btnPortfolio.style.backgroundColor = "#FFE071";
    btnPortfolio.style.color = "#171F26";
    btnSkills.style.backgroundColor = "#FFE071";
    btnSkills.style.color = "#171F26";
  }
  if (widthWithMargin < 600) {
    if(leftPos<320) {
      leftPos += 4; 
    }
  } else {
    if(leftPos<704) {
      leftPos += 4; 
    }
  }
  sectionPS.style.width = `${leftPos}px`;
  requestAnimationFrame(animationColor);
}
sectionPortfolioSkills.addEventListener("mouseenter", animationColor);
arrowScroll.addEventListener("click", scrollUp);
toggleColors.addEventListener("click", toggleColor);
