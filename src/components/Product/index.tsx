import { Card, CardHeader, TituloCard, DescriçaoCard } from './styles'
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

const Product = ({ id, title, description, image, background }: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <CardHeader>
        <TituloCard>{title}</TituloCard>
      </CardHeader>
      <DescriçaoCard>{description}</DescriçaoCard>

      <Button
        key={id}
        background={background}
        type="link"
        to="/product"
        title="Clique aqui para adicionar ao carrinho de compras"
      >
        Adicionar ao carrinho
      </Button>
    </Card>
  )
}

export default Product
