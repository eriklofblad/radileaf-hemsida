import React from "react"

import Layout from "../components/Layouts/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Sidan hittades ej</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
