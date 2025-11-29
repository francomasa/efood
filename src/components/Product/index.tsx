import { Card, CardHeader, TituloCard, DescriçaoCard } from './styles'
import Button from '../Button'
import { Restaurantes } from '../../pages/Home'

export type Cardapio = {
  id: number
  descricao: string
  foto: string
  nome: string
  porcao: string
  preco: number
}
const Product = ({ id, descricao, foto, nome, porcao, preco }: Cardapio) => {
  return (
    <Card>
      <img src={foto} alt={nome} />
      <CardHeader>
        <TituloCard>{nome}</TituloCard>
      </CardHeader>
      <DescriçaoCard>{descricao}</DescriçaoCard>

      <Button
        key={id}
        background="salmao"
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
