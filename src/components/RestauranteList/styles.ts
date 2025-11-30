import styled from 'styled-components'

import { Props } from '.'
import { Cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'restaurantes'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'white' ? Cores.background : Cores.background};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'white' ? Cores.branco : Cores.fontColor};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column=gap: 80px;
  margin-top: 40px;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
