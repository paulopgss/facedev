import styled, { css } from 'styled-components'
import Gradient from '../../assets/gradient.jpg'

export const Container = styled.div`
  margin-top: 60px;
  width: 164px;
  position: fixed;
`
export const Wrapper = styled.div`
  border-radius: 10px;
  background: #FFF;

  display: flex;
  flex-direction: column;

  hr {
    width: 90%;
    align-self: center;
  }
`

export const BoxImgs = styled.div`
  background: url(${Gradient});
  height: 110px;
  border-radius: 10px 10px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImgProfile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #ccc;
`

export const BoxRepos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const Span = styled.span`
  font-size: 12px;

  & + span {
    padding-top: 10px;
  }

  ${props => props.title && css`
    align-self: center;
    padding: 5px 0 10px 0;
  `}
`

export const Strong = styled.strong`
  font-size: 16px;
  align-self: center;
  padding-top: 10px;
`

export const Bio = styled.span`
  font-size: 12px;
  padding: 10px;
  text-align: justify;
`  