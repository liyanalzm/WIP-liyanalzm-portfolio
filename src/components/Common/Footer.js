import React from "react"
import styled from "styled-components"
import Twitter from "../../images/socials/twitter.svg"
import Linkedin from "../../images/socials/linkedin.svg"
import Wordpress from "../../images/socials/wordpress.svg"

const Wrapper = styled.footer`
  padding: 16px;
  background: #4c4c4c;
`
const Container = styled.div`
  max-width: 1099px;
  margin: 0 auto;
`
const ItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Item = styled.div`
  color: #fff;
  font-size: 14px;
  text-align: center;
  svg {
    height: 24px;
    width: 24px;
  }
  ${props =>
    props.withRightSpace &&
    `
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  `}
`

const HR = styled.hr`
  margin: 12px 0;
`

function Footer() {
  return (
    <Wrapper id="footer">
      <Container>
        <ItemWrap>
          <Item withRightSpace>
            <a
              href="https://twitter.com/liyanalzm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
          </Item>
          <Item withRightSpace>
            <a
              href="https://liyanawritescode.wordpress.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Wordpress />
            </a>
          </Item>
          <Item withRightSpace>
            <a
              href="https://www.linkedin.com/in/nur-liyana-mohd-lazim-220847114/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </Item>
        </ItemWrap>

        <HR />

        <Item>
          © Liyana Lazim, {new Date().getFullYear()}
          <br />
          All rights reserved.
        </Item>
      </Container>
    </Wrapper>
  )
}

export default Footer
