import { WorkerSwiper } from "./parts/swiper_init.js";
import PanelModule from "./panel_module.js";

export default function (config) {
  /* ---------------- НАСТРОЙКА ПАНЕЛИ ------------- */

  let panel = new PanelModule(
    config.panel.host,
    config.panel.panel_switch,
    config.panel.button,
    config.panel.button_switch
  );

  /* --- НАСТРОЙКА ОБЁРТКИ Swiper --- */
  let swiper = new WorkerSwiper(config.swiper);

  swiper.setHost(
    config.place.host,
    config.place.large,
    config.place.mobile
  );
  swiper.setWrapper(
    config.wrapper.host,
    config.wrapper.large,
    config.wrapper.mobile
  );
  swiper.setPaginator(
    config.paginate.host,
    config.paginate.large,
    config.paginate.mobile
  );
  swiper.setSliderList(
    config.slide.host,
    config.slide.large,
    config.slide.mobile
  );

  panel.setWorkSwiper(swiper);

  return panel;
}
