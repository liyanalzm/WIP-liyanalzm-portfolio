// Libraries
import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { TimelineMax, Power1, Power4 } from "gsap/TweenMax"

// Styles
import "../styles/404.css"
import { Container, Wrapper, MainImage, Attribution, Button } from "../styles/Common/style"

// Images
import Milk from "../images/milk"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  useEffect(() => {
    // Milk Spill
    const milkSpillLarge = document.getElementById("milk-spill--large")
    new TimelineMax().to(milkSpillLarge, 60, {
      scale: 1.25,
      transformOrigin: "right",
      ease: Power1.easeInOut,
    })

    // Face Hover
    const milkFace = document.getElementById("milk-face")
    new TimelineMax({ yoyo: true, repeat: -1 }).to(milkFace, 10, {
      yPercent: -15,
      ease: Power1.easeInOut,
    })

    // Blink Eyes
    const eyeLeft = document.getElementById("eye-left-open")
    const eyeRight = document.getElementById("eye-right-open")
    const tl = new TimelineMax({ repeatDelay: 5, repeat: -1, yoyo: true })
    tl.to(
      [eyeLeft, eyeRight],
      0.1,
      {
        transformOrigin: "center",
        scaleY: 0,
        ease: Power4.easeNone,
        repeat: 1,
        yoyo: true,
      },
      0
    )

    new TimelineMax({ SVG2GIF: true, repeat: 0 }).timeScale(1)
  }, [])

  const [footerHeight, setFooterHeight] = useState(null)
  useEffect(() => {
    const footer = document.getElementById("footer")
    if (footer) {
      setFooterHeight(footer.clientHeight)
    }
  }, [])
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Container backgroundColor={'#6ace7c'} footerHeight={footerHeight}>
        <Wrapper style={{ textAlign: 'center' }}>
          <MainImage>
            <Milk />
            <Attribution>
              Designed by{' '}
              <a
                href="https://www.freepik.com/free-vector/404-error-design-with-milk_1535244.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Freepik
              </a>
            </Attribution>
          </MainImage>
          <h2 style={{ textAlign: "center", marginTop: '40px' }}>
            Oops! The page that you're looking for cannot be found in the
            directory.
          </h2>

        <Link
          to="/"
        >
        <Button>Return to homepage</Button>
        </Link>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
