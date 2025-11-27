import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Cores } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<
  Omit<Props, 'title' | 'type' | 'to' | 'children' | 'onClick'>
>`
  border: none;
  color: ${(props) =>
    props.background === 'white' ? Cores.fontColor : Cores.fontColor};
  background-color: ${(props) =>
    props.background === 'white' ? Cores.fontColor : Cores.background};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  padding: 8px 16px;
  margin: 16px 0 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)<
  Omit<Props, 'title' | 'type' | 'to' | 'children' | 'onClick'>
>`
  border: none;
  color: ${(props) =>
    props.background === 'salmao' ? Cores.fontColor : Cores.background};
  background-color: ${(props) =>
    props.background === 'salmao' ? Cores.background : Cores.fontColor};
  margin: ${(props) =>
    props.background === 'salmao' ? '16px 0px 8px' : '16px 8px 8px'};

  border-radius: 8px;
  font-size: 16px;
  padding: 8px 16px;
  cursor: pointer;
  text-decoration: none;
  display: ${(props) =>
    props.background === 'salmao' ? 'block' : 'inline-block'};
`
