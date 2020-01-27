import React, { useEffect, useState } from "react"
import EggOnMill from "./egg-on-mill/egg-on-mill"
import {
  Container,
  MainImage,
  Attribution,
  Wrapper,
  Text,
} from "../../styles/Common/style"

function Underconstruction() {

  const [footerHeight, setFooterHeight] = useState(null)
  useEffect(() => {
    const footer = document.getElementById("footer")
    if (footer) {
      setFooterHeight(footer.clientHeight)
    }
  }, [])

  
  return (
    <Container backgroundColor={'#53aefc'} footerHeight={footerHeight}>
      <Wrapper>
        <MainImage>
          <EggOnMill />
          <Attribution>
            Designed by{" "}
            <a
              href="https://codepen.io/chrisgannon/pen/Vbzwyg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chris Gannon
            </a>
          </Attribution>
        </MainImage>
        <h2 style={{ textAlign: "center", marginTop: 40, marginBottom: 0 }}>
          She is still working on it!
        </h2>
        <Text align="center" style={{ marginTop: "20px", textAlign: "center" }}>
          Thank you for your visit to my portfolio. However, right now I am
          working very hard on finishing it. Please come back soon!
        </Text>
        <Text align="center" style={{ marginTop: "20px", textAlign: "center" }}>
          In the meantime, check out my profile at these links below:
          <br />
          <a
            href="https://www.linkedin.com/in/nur-liyana-mohd-lazim-220847114/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/liyanalzm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://codesandbox.io/u/liyanalzm"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeSandBox
          </a>
        </Text>
      </Wrapper>
    </Container>
  )
}
export default Underconstruction
