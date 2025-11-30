import { Card, CardHeader, TituloCard, DescriçaoCard } from './styles'
import Button from '../Button'
import { getDescrition } from '../../pages/Home'

export type Cardapio = {
  id: number
  descricao: string
  foto: string
  nome: string
  porcao: string
  preco: number
  restautanteId: number
}
const Product = ({
  id,
  descricao,
  foto,
  nome,
  porcao,
  preco,
  restautanteId
}: Cardapio) => {
  return (
    <Card>
      <img src={foto} alt={nome} />
      <CardHeader>
        <TituloCard>{nome}</TituloCard>
      </CardHeader>
      <DescriçaoCard>{getDescrition(descricao)}</DescriçaoCard>

      <Button
        key={id}
        background="white"
        type="link"
        to="/product"
        title="Clique aqui para adicionar ao carrinho de compras"
      >
        Adicionar ao carrinho {restautanteId}
      </Button>
    </Card>
  )
}

export default Product
