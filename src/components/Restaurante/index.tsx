import { useParams } from 'react-router-dom'
import Tag from '../Tag'
import StarImage from '../../assets/icons/star.png'
import {
  Card,
  CardHeader,
  TituloCard,
  DescriçaoCard,
  Infos,
  Avaliacao
} from './styles'
import Button from '../Button'

type Props = {
  id: number
  title: string
  category: string
  avaliation: string
  description: string
  infos: string[]
  image: string
  background?: 'white' | 'salmao'
}

const Restaurante = ({
  title,
  category,
  avaliation,
  description,
  infos,
  image,
  background
}: Props) => {
  const { id } = useParams()
  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
        <Tag>{category}</Tag>
      </Infos>
      <CardHeader>
        <TituloCard>{title}</TituloCard>
        <Avaliacao>
          {avaliation}
          <img src={StarImage} alt="star" />
        </Avaliacao>
      </CardHeader>
      <DescriçaoCard>{description}</DescriçaoCard>
      <Button
        key={id}
        background={background}
        type="link"
        to="/restaurantes/${id}"
        title="Clique aqui para conhecer o restaurante"
      >
        Saiba mais
      </Button>
    </Card>
  )
}

export default Restaurante
