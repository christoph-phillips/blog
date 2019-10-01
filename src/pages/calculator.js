import React, { useEffect } from "react"
import { Link, graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ZoneCalculator from "../components/zone-calculator"

const Calculator = ({ location }) => {
  return (<Layout>
    <SEO title="Heart Rate Zone Calculator" />
    <ZoneCalculator search={location.search} />
  </Layout>)
}

export default Calculator
