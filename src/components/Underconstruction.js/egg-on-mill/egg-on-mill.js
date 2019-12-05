import React from "react"
import styled from "styled-components"
import Lottie from "lottie-react-web"
import Egg from "../../../images/egg-on-mill.json"

const bodymovinOptions = {
  animType: "svg",
  loop: true,
  prerender: true,
  autoplay: true,
  animationData: Egg,
}

const Animation = styled.div`
  margin: auto;
  max-width: 600px;
`

function EggOnMill() {
  return (
    <Animation id="animationWindow">
      <Lottie
        options={bodymovinOptions}
      />
    </Animation>
  )
}

export default EggOnMill
