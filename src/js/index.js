import "swiper/css/bundle";
import "../scss/style.scss";
import Panel from "./panel_module/panel";

let MOBILE_WIDTH = 767;

const config_panel_service = {
  swiper: ".service-swiper",
  panel: {
    host: ".services-panel .panel__elements",
    panel_switch: "panel__elements-large--close",
    button: ".services-panel>.panel__button-arrow",
    button_switch: "button-arrow--open"
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
    button_switch: "button-arrow--open"
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

let service_panel = Panel(config_panel_service);
let technique_panel = Panel(config_panel_technique);

function sizeReaction() {
  let is_mobile = screen.width <= MOBILE_WIDTH ? true : false;
  service_panel.sizeReaction(is_mobile);
  technique_panel.sizeReaction(is_mobile);
}

document.addEventListener("DOMContentLoaded", sizeReaction);
window.addEventListener("resize", sizeReaction);
