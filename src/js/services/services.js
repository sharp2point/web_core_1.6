import { WorkerSwiper } from "../panel_module/parts/swiper_init.js";
import PanelModule from "../panel_module/panel_module.js";

let MOBILE_WIDTH = 767;
const config_panel = {
  swiper: ".swiper",
  panel: {
    host: ".services__brands",
    button: ".button__arrow",
  },
  place: {
    host: ".services__brands",
    large: ["services__brands-large"],
    mobile: ["services__brands", "swiper"],
  },
  wrapper: {
    host: ".wrapper",
    large: ["brands__wrapper-large"],
    mobile: ["swiper-wrapper"],
  },
  paginate: {
    host: ".swiper-pagination",
    large: ["brands__paginator"],
    mobile: ["swiper-pagination"],
  },
  slide: {
    host: ".brands__item",
    large: [],
    mobile: ["swiper-slide"],
  },
};
/* ---------------- НАСТРОЙКА ПАНЕЛИ ------------- */

let host_brand_panel = new PanelModule(
  config_panel.panel.host,
  config_panel.panel.button
);

/* --- НАСТРОЙКА ОБЁРТКИ Swiper --- */
let swiper = new WorkerSwiper(config_panel.swiper);

swiper.setHost(
  config_panel.place.host,
  config_panel.place.large,
  config_panel.place.mobile
);
swiper.setWrapper(
  config_panel.wrapper.host,
  config_panel.wrapper.large,
  config_panel.wrapper.mobile
);
swiper.setPaginator(
  config_panel.paginate.host,
  config_panel.paginate.large,
  config_panel.paginate.mobile
);
swiper.setSliderList(
  config_panel.slide.host,
  config_panel.slide.large,
  config_panel.slide.mobile
);

host_brand_panel.setWorkSwiper(swiper);

/* --------------------- EVENTS ---------------- */

function mobileScreen() {
  return screen.width <= MOBILE_WIDTH ? true : false;
}

document.addEventListener("DOMContentLoaded", () => {
  host_brand_panel.sizeReaction(mobileScreen());
});
window.addEventListener("resize", () => {
  host_brand_panel.sizeReaction(mobileScreen());
});
