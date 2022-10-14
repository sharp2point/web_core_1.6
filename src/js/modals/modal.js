export default class {
  constructor(el, open_class, close_class) {
    this.el = el;
    this.open_class = open_class;
    this.close_class = close_class;
    this.el.addEventListener("click", (e) => {
      if (e.currentTarget === e.target) {
        this.close();
      }
    });
  }
  open() {
    const page = document.querySelector(".page");
    const page_height = Math.floor(page.getBoundingClientRect().height);
    this.el.style.display = "flex";
    this.el.style.height = `${page_height}px`;
    setTimeout(() => {
      this.el.classList.remove(this.close_class);
      this.el.classList.add(this.open_class);
    }, 100);
  }
  close() {
    this.el.classList.remove(this.open_class);
    this.el.classList.add(this.close_class);
    setTimeout(() => {
      this.el.style.display = "none";
    }, 1000);
  }
}
