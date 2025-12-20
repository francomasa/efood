import { Restaurantes } from '../../pages/Home'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  background: 'white' | 'salmao'
  restaurantes: Restaurantes
}

const ProductsList = ({ restaurantes, background }: Props) => {
  const cardapio = restaurantes.cardapio

  return (
    <Container background={background}>
      <div className="container">
        <List>
          {cardapio &&
            cardapio.map((objeto, index) => (
              <>
                <Product
                  key={index}
                  restaurante={restaurantes}
                  cardapio={objeto}
                />
              </>
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
