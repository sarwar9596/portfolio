function toggle() {
  const menu = document.querySelector(".hamburger.lines");
  const links = document.querySelector(".hamburger.nav-links");
  menu.classList.toggle("clicked");
  links.classList.toggle("clicked");
}

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll(".header a");
console.log(links);
window.scroll = () => {
  let y = window.scrollY;

  sections.forEach((sec) => {
    let secTop = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (y >= secTop && y < height + secTop) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
      });

      let activeMenu = document.querySelector(".header a[href*=" + id + "]");
      activeMenu.forEach((link) => link.classList.add("active"));
    }
  });
};
