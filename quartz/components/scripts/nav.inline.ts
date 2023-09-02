function toggleNav(this: HTMLElement) {
  this.classList.toggle("collapsed")
  const content = this.nextElementSibling as HTMLElement
  content.classList.toggle("collapsed")
  content.style.maxHeight = content.style.maxHeight === "0px" ? content.scrollHeight + "px" : "0px"
}

function setupNav() {
  const toc = document.getElementById("nav-collapse")
  if (toc) {
    const content = toc.nextElementSibling as HTMLElement
    content.style.maxHeight = content.scrollHeight + "px"
    if (window.innerWidth < 1500) {
      content.style.maxHeight = "0px"
    }
    toc.removeEventListener("click", toggleNav)
    toc.addEventListener("click", toggleNav)
  }
}

window.addEventListener("resize", setupNav)
document.addEventListener("nav", () => {
  setupNav()
})
