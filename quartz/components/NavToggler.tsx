import { QuartzComponentConstructor } from "./types"

function NavToggler() {
  return (
    <button type="button" id="nav-collapse">
      <h3>Menu</h3>
    </button>
  )
}

export default (() => NavToggler) satisfies QuartzComponentConstructor
