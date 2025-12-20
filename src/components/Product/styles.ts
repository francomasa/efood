import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.li`
  background-color: ${Cores.fontColor};
  color: ${Cores.branco};
  border: 1px solid ${Cores.fontColor};
  border-radius: 8px;
  position: relative;
  max-width: 472px;
  margin-bottom: 48px;
  padding: 8px;

  img {
    width: 100%;
    height: 100%;
    max-width: 304px;
    max-height: 167px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const TituloCard = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const DescriçaoCard = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  display: block;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

//MODAL

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
    place-items: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  background-color: ${Cores.fontColor};
  color: ${Cores.branco};
  header {
    display: flex;
    margin: 8px 8px 8px;
    align-items: center;
    justify-content: right;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }
  div {
    display: flex;
  }
  div > img {
    width: 280px;
    height: 280px;
    margin: 0 32px 32px;
    object-fit: cover;
  }

  div > div {
    display: block;
    font-size: 14px;

    h2 {
      margin-bottom: 16px;
      font-size: 18px;
    }
    .descricao {
      margin-bottom: 16px;
      margin-right: 32px;
      font-weight: 400;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }
`
