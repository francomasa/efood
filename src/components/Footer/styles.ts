import styled from 'styled-components'
import { Cores } from '../../styles'
import background from '../../assets/images/fundo.png'
export const Container = styled.footer`
  padding: 32px 0;
  font-size: 14px;
  background-image: url(${background});
  border-radius: 16px;
  text-align: center;
`

export const SectionTitle = styled.h4`
  color: ${Cores.branco};
  font-size: 16px;
  font-wright: bold;
`

export const Links = styled.ul`
  display: flex;
  margin: 24px auto 0;
  column-gap: 8px;
  justify-content: center;
`

export const Link = styled.a`
  color: ${Cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
  cursor: pointer;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
