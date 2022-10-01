import "swiper/css/bundle";
import "../scss/style.scss";
import Panel from "./panel_module/panel";

let MOBILE_WIDTH = 767;

const config_panel_service = {
  swiper: ".swiper",
  panel: {
    host: ".panel__elements",
    panel_switch: "panel__elements-large--close",
    button: ".panel__button-arrow",
    button_switch: "button-arrow--open"
  },
  place: {
    host: ".panel__elements",
    large: ["panel__elements--large"],
    mobile: ["panel__elements", "swiper"],
  },
  wrapper: {
    host: ".wrapper",
    large: ["wrapper-large"],
    mobile: ["swiper-wrapper"],
  },
  paginate: {
    host: ".swiper-pagination",
    large: ["panel__paginator--hide"],
    mobile: ["swiper-pagination"],
  },
  slide: {
    host: ".elements__item",
    large: [],
    mobile: ["swiper-slide"],
  },
};


let service_panel = Panel(config_panel_service);
//let technique_panel = Panel(config_panel_tehnique);

function sizeReaction() {
  let is_mobile = screen.width <= MOBILE_WIDTH ? true : false;
  console.log(is_mobile);
  service_panel.sizeReaction(is_mobile);
  //technique_panel.sizeReaction(is_mobile);
}

document.addEventListener("DOMContentLoaded", sizeReaction);
window.addEventListener("resize", sizeReaction);
