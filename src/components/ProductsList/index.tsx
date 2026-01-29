import { Restaurantes } from '../../pages/Home'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  background: 'white' | 'salmao'
  restaurantes: Restaurantes
}

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ restaurantes, background }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <List>
          {restaurantes.cardapio &&
            restaurantes.cardapio.map((objeto, index) => (
              <>
                <Product key={index} restaurante={restaurantes} menu={objeto} />
              </>
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
