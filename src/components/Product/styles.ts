import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.li`
  background-color: ${Cores.branco};
  border: 1px solid ${Cores.fontColor};
  border-radius: 8px;
  position: relative;
  max-width: 472px;
  margin-bottom: 48px;
  padding: 8px;

  img {
    width: 100%;
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
