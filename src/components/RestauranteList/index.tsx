import Restaurantes from '../../models/Restaurantes'
import Product from '../Product'
import Restaurante from '../Restaurante'

import { Container, List } from './styles'

export type Props = {
  title?: string
  background: 'white' | 'salmao'
  restaurantes: Restaurantes[]
}

const RestauranteList = ({ background, restaurantes }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {restaurantes.map((restaurant) => (
          <Restaurante
            key={restaurant.id}
            id={restaurant.id}
            category={restaurant.category}
            description={restaurant.description}
            image={restaurant.image}
            title={restaurant.title}
            avaliation={restaurant.avaliation}
            infos={restaurant.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestauranteList
