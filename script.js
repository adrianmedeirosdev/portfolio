const navList = document.querySelector(".nav-list")
const navItems = navList.querySelectorAll("li")
navItems.forEach(navItem => {
  navItem.addEventListener("click", () => {
    var current = document.querySelectorAll('.active')
    current[0].className = current[0].className.replace("active", "")
    if (!navItem.classList.contains("active")) {
      navItem.classList.add("active")
    }
  })
})










