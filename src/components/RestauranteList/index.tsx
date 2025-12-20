import { useEffect, useState } from 'react'

import { Container, List } from './styles'
import { Restaurantes } from '../../pages/Home'
import Restaurante from '../Restaurante'

export type Props = {
  title?: string
  background: 'white' | 'salmao'
}

const RestauranteList = ({ background }: Props) => {
  const [restaurantes, setRestautantes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestautantes(res))
  }, [])
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
