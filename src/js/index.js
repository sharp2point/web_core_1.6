import "swiper/css/bundle";
import "../scss/style.scss";
import Panel from "./panel_module/panel";
import Modal from "./modals/modal";

let MOBILE_WIDTH = 767;

const config_panel_service = {
  swiper: ".service-swiper",
  panel: {
    host: ".services-panel .panel__elements",
    panel_switch: "panel__elements-large--close",
    button: ".services-panel>.panel__button-arrow",
    button_switch: "button-arrow--open",
  },
  place: {
    host: ".services-panel .panel__elements",
    large: ["panel__elements--large"],
    mobile: ["panel__elements", "service-swiper"],
  },
  wrapper: {
    host: ".services-panel .wrapper",
    large: ["wrapper-large"],
    mobile: ["swiper-wrapper"],
  },
  paginate: {
    host: ".services-panel .swiper-pagination",
    large: ["panel__paginator--hide"],
    mobile: ["swiper-pagination"],
  },
  slide: {
    host: ".services-panel .elements__item",
    large: [],
    mobile: ["swiper-slide"],
  },
};
const config_panel_technique = {
  swiper: ".technique-swiper",
  panel: {
    host: ".technique-panel .panel__elements",
    panel_switch: "panel__elements-large--close",
    button: ".technique-panel .panel__button-arrow",
    button_switch: "button-arrow--open",
  },
  place: {
    host: ".technique-panel .panel__elements",
    large: ["panel__elements--large"],
    mobile: ["panel__elements", "technique-swiper"],
  },
  wrapper: {
    host: ".technique-panel .wrapper",
    large: ["wrapper-large"],
    mobile: ["swiper-wrapper"],
  },
  paginate: {
    host: ".technique-panel .swiper-pagination",
    large: ["panel__paginator--hide"],
    mobile: ["swiper-pagination"],
  },
  slide: {
    host: ".technique-panel .elements__item",
    large: [],
    mobile: ["swiper-slide"],
  },
};
const config_panel_price = {
  swiper: ".price-swiper",
  panel: {
    host: ".price-panel .panel__elements",
    panel_switch: "panel__elements-large--close",
    button: null,
    button_switch: null,
  },
  place: {
    host: ".price-panel .panel__elements",
    large: ["panel__elements--large"],
    mobile: ["panel__elements", "price-swiper"],
  },
  wrapper: {
    host: ".price-panel .wrapper",
    large: ["wrapper-large__price"],
    mobile: ["swiper-wrapper"],
  },
  paginate: {
    host: ".price-panel .swiper-pagination",
    large: ["panel__paginator--hide"],
    mobile: ["swiper-pagination"],
  },
  slide: {
    host: ".price-panel .elements__item",
    large: [],
    mobile: ["swiper-slide"],
  },
};

let service_panel = Panel(config_panel_service); // блок -> ремонт техники различных брендов
let technique_panel = Panel(config_panel_technique); // блок -> ремонт различных брендов техники
let price_panel = Panel(config_panel_price); // блок -> цены на услуги

function sizeReaction() {
  let is_mobile = window.innerWidth <= MOBILE_WIDTH ? true : false;
  service_panel.sizeReaction(is_mobile);
  technique_panel.sizeReaction(is_mobile);
  price_panel.sizeReaction(is_mobile);
}

document.addEventListener("DOMContentLoaded", sizeReaction);
window.addEventListener("resize", sizeReaction);

// ------------- MODAL FEEDBACK ---------------------------------------//
let feedback_button = document.querySelector(".up-menu__button-chat");
let feedback_button_close = document.querySelector(".feedback-button");
let feedback_el = document.querySelector(".feedback");

let feedback_modal = new Modal(feedback_el, "feedback--open", "feedback--close");

feedback_button.addEventListener("click",()=>{  
  feedback_modal.open();
});
feedback_button_close.addEventListener("click",()=>{
  feedback_modal.close();
});
