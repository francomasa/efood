import styled from 'styled-components'
import { Cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import lixera from '../../assets/icons/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Cores.preto};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${Cores.fontColor};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${Cores.fontColor};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${Cores.cinzaClaro};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${Cores.branco};
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${Cores.background};
  color: ${Cores.fontColor};
  padding: 8px 0;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 0px 8px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    font-size: 14px;
  }

  button {
    background-image: url(${lixera});
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    border: none;
  }
`
