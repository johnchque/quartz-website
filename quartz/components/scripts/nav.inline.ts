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
    toc.removeEventListener("click", toggleNav)
    toc.addEventListener("click", toggleNav)
  }
}

window.addEventListener("resize", setupNav)
document.addEventListener("nav", () => {
  setupNav()

  // update toc entry highlighting
  observer.disconnect()
  const headers = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
  headers.forEach((header) => observer.observe(header))
})
