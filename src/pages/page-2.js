import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Heading, Paragraph } from "theme-ui"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <Heading>Hi from the second page</Heading>
    <Paragraph>Welcome to page 2</Paragraph>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
