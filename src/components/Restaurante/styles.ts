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
  font-weight: 400;

  > img {
    max-width: 100%;
    width: 472px;
    height: 217px;
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
  padding: 0 8px;
`
export const TituloCard = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Avaliacao = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding: 8px;
  align-items: center;
  display: flex;

  img {
    padding-left: 8px;
  }
`

export const DescriçaoCard = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  display: block;
  padding: 0 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
