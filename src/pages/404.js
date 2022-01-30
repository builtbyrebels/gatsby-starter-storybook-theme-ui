import * as React from "react"
import { Heading, Paragraph } from "theme-ui"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Heading>404: Not Found</Heading>
    <Paragraph>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Paragraph>
  </Layout>
)

export default NotFoundPage
