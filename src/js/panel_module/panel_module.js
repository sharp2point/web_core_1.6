import PanelButton from "./parts/panel_button.js";
import Panel from "./parts/panel.js";

export default class PanelModule {
  constructor(
    panel_class, // класс элемента панели
    switch_panel_class,
    button_class, // класс кнопки управления
    switch_button_class
  ) {
    this.is_mobile_state;

    this.panel = Panel(panel_class, switch_panel_class, false); // инициализация блока

    if (button_class !== null) {
      this.panel_button = PanelButton(
        button_class,
        switch_button_class,
        this.panel,
        true,
        false
      ); // инициализация кнопки
    }

    this.wswiper; // экземпляр WorkSwiper
  }
  /* -------- METHODS --------- */
  setWorkSwiper = (wswiper) => {
    // устанавливает свой экземпляр swiper
    this.wswiper = wswiper;
  };

  sizeReaction = (is_mobile) => {
    // переключение мобильный/полный в зависимости от размеров экрана
    if (is_mobile !== this.is_mobile_state) {
      this.wswiper.toggleSwiperClass(is_mobile); // переключение стилей
      if(this.panel_button){
        this.panel_button.show_or_hide(is_mobile); // скрыть/показать кнопку
      }
      
      this.is_mobile_state = is_mobile;

      if (is_mobile) {
        this.wswiper.init();
      } else {
        this.wswiper.clear();
      }
    }
  };
}
