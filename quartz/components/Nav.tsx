import { QuartzComponentConstructor } from "./types"
import style from "./styles/nav.scss"
// @ts-ignore
import script from "./scripts/nav.inline"

function Nav() {
  return (
    <div id="nav">
      <ul>
        <li>
          <a href="/projects/">Projects</a>
        </li>
        <li>
          <a href="/about/">About</a>
        </li>
      </ul>
    </div>
  )
}

Nav.afterDOMLoaded = script
Nav.css = style

export default (() => Nav) satisfies QuartzComponentConstructor
