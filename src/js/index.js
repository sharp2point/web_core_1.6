import "swiper/css/bundle";
import "../scss/style.scss";
import Panel from "./panel_module/panel";
import Modal from "./modals/modal";

let MOBILE_WIDTH = 767;

const config_panel_service = {
  swiper: {
    host:".service-swiper",
    width: 240
  },
  
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
  swiper: {
    host:".technique-swiper",
    width: 224
  },
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
  swiper: {
    host:".price-swiper",
    width: 265
  },
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
// let price_panel = Panel(config_panel_price); // блок -> цены на услуги

function sizeReaction() {
  let is_mobile = window.innerWidth <= MOBILE_WIDTH ? true : false;
  service_panel.sizeReaction(is_mobile);
  technique_panel.sizeReaction(is_mobile);
  // price_panel.sizeReaction(is_mobile);
}

document.addEventListener("DOMContentLoaded", sizeReaction);
window.addEventListener("resize", sizeReaction);

// ------------- MODAL BURGER -----------------------------------------//
const burger_button = document.querySelector(".up-menu__button-burger");
const modal_host = document.querySelector(".modal-host");
const mobile_menu_close_button = document.querySelector(
  ".mobile-menu__button-close"
);

function open_modal(is_open) {
  if (is_open) {
    modal_host.classList.add("modal-host_open");
  } else {
    modal_host.classList.remove("modal-host_open");
  }
}

// открывает модальное окно по клику на кнопке burger-button
burger_button.addEventListener("click", () => open_modal(true));

// закрывает модальное окно по клику на пустом пространстве модального окна
modal_host.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-host")) {
    open_modal(false);
  }
});

// закрывает модальное окно по клику на кнопке close-button
mobile_menu_close_button.addEventListener("click", () => open_modal(false));

// ------------- MODAL FEEDBACK ---------------------------------------//
let feedback_buttons = document.querySelectorAll(".button-chat");
let feedback_button_close = document.querySelector(".feedback-button");
let feedback_el = document.querySelector(".feedback");

let feedback_modal = new Modal(feedback_el, "modal--open", "modal--close");

feedback_buttons.forEach((bt) =>
  bt.addEventListener("click", () => {
    feedback_modal.open();
    open_modal(false);
  })
);
feedback_button_close.addEventListener("click", () => {
  feedback_modal.close();
});

// --------- MODAL CALL ----------------------------------------------//
let call_buttons = document.querySelectorAll(".button-call");
let call_button_close = document.querySelector(".call-button");
let call_el = document.querySelector(".call");

let call_modal = new Modal(call_el, "modal--open", "modal--close");

call_buttons.forEach((bt) =>
  bt.addEventListener("click", () => {
    call_modal.open();
    open_modal(false);
  })
);
call_button_close.addEventListener("click", () => {
  call_modal.close();
});
