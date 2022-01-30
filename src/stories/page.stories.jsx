import React from "react"

import { Page } from "./page"
import * as HeaderStories from "../components/header.stories"

export default {
  title: "Example/Page",
  component: Page,
}

const Template = args => <Page {...args} />

export const Default = Template.bind({})
Default.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.Default.args,
}
