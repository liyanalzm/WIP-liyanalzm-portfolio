import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  background: ${props => props.backgroundColor || "#ffffff"};
  min-height: 100vh;
  max-width: 1099px;
`

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

export const MainImage = styled.div`
  position: relative;
`

export const Attribution = styled.span`
  font-size: 10px;
  color: #333;

  position: absolute;
  bottom: 0;
  right: 0;
`

export const Text = styled.span`
  display: block;
  font-size: 16px;
  color: #333;
  line-height: 20px;
`