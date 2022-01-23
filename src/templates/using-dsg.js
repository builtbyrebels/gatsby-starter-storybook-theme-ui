import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Heading, Paragraph } from "theme-ui"

const UsingDSG = () => (
  <Layout>
    <Seo title="Using DSG" />
    <Heading>Hello from a DSG Page</Heading>
    <Paragraph>This page is not created until requested by a user.</Paragraph>
    <Paragraph>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
        documentation about Deferred Static Generation
      </a>
      .
    </Paragraph>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingDSG
