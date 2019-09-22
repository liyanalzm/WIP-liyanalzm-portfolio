import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to Liyana's new Gatsby site.</p>
    <p>New layout will be updating soon. <br/> Currently I am learning on deploying a web app to the nets.</p>
    <p>Gatsby is great for static web app, hence the reason I create with it. If you are planning to do a react app with a server call, better use NextJS.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
