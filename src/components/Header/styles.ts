import styled from 'styled-components'
import { Cores } from '../../styles'
import HeroBackground from '../../assets/images/fundo.png'

export const HeaderBar = styled.header`
  background-color: ${Cores.background};
  background-image: url(${HeroBackground});
  border-radius: 16px;
  text-align: center;
`

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.div`
  padding: 64px 0 140px;
`
export const HeroText = styled.p`
  color: ${Cores.fontColor};
  font-weight: 900;
  font-size: 36px;
  max-width: 540px;
  margin: 0 auto;
  padding-bottom: 40px;
`

export const LinkCart = styled.a`
  text-decoration: none;
  color: ${Cores.fontColor};
  font-weight: 900;
  font-size: 18px;
  cursor: pointer;
`

export const HeaderResto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 186px;
`

export const CapaResto = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  color: ${Cores.branco};
  text-align: left;
  height: 280px;
  width: 100%;
`

export const Category = styled.p`
  padding: 24px 0;
  font-size: 32px;
  font-weight: 100;
`

export const HeaderTitle = styled.h2`
  padding: 128px 0 32px;
  font-size: 32px;
`
