import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ZoneCalculator from "../components/zone-calculator"

const Calculator = ({ location }) => {
  return (<Layout
      title="Heart Rate Zone Calculator"
      subtitle="Plugin Your Max Heart Rate"
  >
    <SEO title="Heart Rate Zone Calculator" />
    <ZoneCalculator search={location.search} />
  </Layout>)
}

export default Calculator
