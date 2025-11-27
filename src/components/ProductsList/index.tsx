import Restaurantes from '../../models/Restaurantes'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title?: string
  background: 'white' | 'salmao'
  cardapio: Restaurantes[]
}

const ProductsList = ({ background, cardapio }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {cardapio.map((restaurant) => (
          <Product
            key={restaurant.id}
            id={restaurant.id}
            category={restaurant.category}
            description={restaurant.description}
            image={restaurant.image}
            title={restaurant.title}
            avaliation={restaurant.avaliation}
            infos={restaurant.infos}
            background={background}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
