import React from "react"
import styled from "styled-components"
import ReactBodymovin from "react-bodymovin/lib/ReactBodymovinFull"

const bodymovinOptions = {
  animType: "svg",
  loop: true,
  prerender: true,
  autoplay: true,
  path: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/egg_data.json",
}

const Animation = styled.div`
  margin: auto;
  max-width: 600px;
`

function EggOnMill() {
  return (
    <Animation id="animationWindow">
      <ReactBodymovin options={bodymovinOptions} />
    </Animation>
  )
}

export default EggOnMill
