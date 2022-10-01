export default function (class_element,panel_switch_class, is_open) {
  let is_open_pnl = is_open;
  let switch_class = panel_switch_class;
  let dom_el = document.querySelectorAll(class_element)[0];

  function open_or_close(is_open) {
    is_open_pnl = is_open
    if (is_open) {
      dom_el.classList.remove(switch_class);
    } else {
      dom_el.classList.add(switch_class);
    }
    return is_open_pnl;
  }

  return {
    is_open_pnl: is_open_pnl,
    el: dom_el,
    open_or_close: open_or_close,
  };
}
