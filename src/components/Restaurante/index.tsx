import Tag from '../Tag'
import StarImage from '../../assets/icons/star.png'
import { Restaurantes } from '../../pages/Home'
import {
  Card,
  CardHeader,
  TituloCard,
  DescriçaoCard,
  Infos,
  Avaliacao
} from './styles'
import Button from '../Button'
import { getDescrition } from '../../pages/Home'

const Restaurante = ({
  id,
  titulo,
  tipo,
  avaliacao,
  descricao,
  capa,
  destacado
}: Restaurantes) => {
  return (
    <Card>
      <img src={capa} alt={titulo} />
      <Infos>
        {destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
      </Infos>
      <CardHeader>
        <TituloCard>{titulo}</TituloCard>
        <Avaliacao>
          {avaliacao}
          <img src={StarImage} alt="star" />
        </Avaliacao>
      </CardHeader>
      <DescriçaoCard>{getDescrition(descricao)}</DescriçaoCard>
      <Button
        background="salmao"
        type="link"
        to={`/restaurantes/${id}`}
        title="Clique aqui para conhecer o restaurante"
      >
        Saiba mais
      </Button>
    </Card>
  )
}

export default Restaurante
