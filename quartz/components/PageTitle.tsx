import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <a className="page-title" href={baseDir}>
      <img src={"/images/logo.svg"}></img>
    </a>
  )
}

PageTitle.css = `
.page-title {
  height: 43px;
}
.page-title img {
  margin: 0;
  height: 100%;
}

`

export default (() => PageTitle) satisfies QuartzComponentConstructor
