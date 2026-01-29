import { Container, List } from './styles'
import Restaurante from '../Restaurante'
import { useGetRestaurantsQuery } from '../../services/api'

export type Props = {
  title?: string
  background: 'white' | 'salmao'
}

const RestauranteList = ({ background }: Props) => {
  const { data: restaurantes } = useGetRestaurantsQuery()

  if (!restaurantes) {
    return <h2>Carregando...</h2>
  }

  return (
    <Container background={background}>
      <div className="container">
        <List>
          {restaurantes &&
            restaurantes.map((restaurant, index) => (
              <Restaurante
                key={index}
                id={restaurant.id}
                tipo={restaurant.tipo}
                descricao={restaurant.descricao}
                capa={restaurant.capa}
                titulo={restaurant.titulo}
                cardapio={restaurant.cardapio}
                destacado={restaurant.destacado}
                avaliacao={restaurant.avaliacao}
              />
            ))}
        </List>
      </div>
    </Container>
  )
}

export default RestauranteList
