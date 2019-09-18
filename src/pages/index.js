import React, { useEffect } from "react"
import { navigate } from "gatsby"

const IndexPage = (props) => {
  useEffect(() => {
    navigate('/run/');
  }, []);
  return null
}

export default IndexPage