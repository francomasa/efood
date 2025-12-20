import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const TituloBanner = styled.h2`
  max-width: 450px;
  width: 100%;
  font-size: 36px;
`

export const PrecoBanner = styled.p`
  max-width: 232px;
  width: 100%;
  padding-top: 24px;
  font-size: 24px;

  span {
    text-decoration: line-through;
  }
`
