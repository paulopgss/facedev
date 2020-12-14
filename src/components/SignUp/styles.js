import styled from 'styled-components'
import { Form } from '@unform/web'
import {shade} from 'polished'


export const Container = styled.div`
  width: 270px;
  background: #575A89;
  border-radius: 5px;
  z-index: 10;
  margin-top: 10px;
  margin-left: -70px;
  position: absolute;
  display: flex;
  flex-direction: column;
`

export const TextSignUp = styled.p`
  padding: 40px 0 0 0;
  color: #FFF;
  align-self: center;
`

export const FormUnform = styled(Form)`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Button = styled.button`
  width: 80px;
  height: 45px;
  border: 0;
  font-weight: 500;
  border-radius: 5px;
  background: #FFF;
  color: #575A89;
  outline: none;
  transition: 0.2s;
  cursor: pointer;

  :hover{
    background: ${shade(0.2, '#FFF')};
  }
`
