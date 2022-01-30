// example theme based on preset-future
import future from "@theme-ui/preset-funk"
import { merge } from "theme-ui"

export default merge(future, {
  fonts: {
    body: "Open Sans, sans-serif",
  },
  text: {
    paragraph: {
      my: 2,
    },
    footer: {
      variant: "paragraph",
      fontSize: 1,
    },
  },
})
