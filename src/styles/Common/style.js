import styled from "styled-components"

export const Container = styled.div`
  min-height: ${props => props.footerHeight ? `calc(100vh - ${props.footerHeight}px)` : '100vh'};
  background: ${props => props.backgroundColor || "#ffffff"};
`

export const Wrapper = styled.div`
  max-width: 500px;
  min-height: 600px;
  margin: 0 auto;
  padding: 40px 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}


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
  font-family: Lato;
  display: block;
  font-size: 16px;
  color: #333;
  line-height: 20px;
`

export const Button = styled.button`
  font-family: Lato;
  background-color: #333;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  outline: 0;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.95;
  }
`
