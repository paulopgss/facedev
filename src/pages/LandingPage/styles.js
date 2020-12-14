import styled, {css} from 'styled-components'
import {shade} from 'polished'
import { Form } from '@unform/web'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
`

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 80px;
`

export const ImgLogo = styled.img``

export const SignUpButton = styled.button`
  width: 200px;
  height: 50px;
  border: 0;
  border-radius: 5px;
  background: #575A89;
  color: #FFF;
  transition: 0.2s;
  cursor: pointer;

  :hover{
    background: ${shade(0.2, '#575A89')};
  }

  ${props => props.login && css`
    width: 100px;
    height: 40px;
    align-self: flex-start;
    margin-top: 10px;
  `}
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const FormUnform = styled(Form)`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TextLogin = styled.p`
  align-self: flex-start;
  padding-left: 5px;
  color: #575A89;
  font-size: 16px;
  font-weight: 500;
`

export const ImgBanner = styled.img``