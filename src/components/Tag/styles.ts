import styled from 'styled-components'
import { Cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${Cores.fontColor};
  color: ${Cores.branco};
  padding: ${(props) => (props.size === 'big' ? ' 8px 16px' : '4px 6px')};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  border-radius: 8px;
  display: inline-block;
  margin-right: 8px;
`
