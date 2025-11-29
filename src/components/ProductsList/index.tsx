import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Restaurantes } from '../../pages/Home'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title?: string
  background: 'white' | 'salmao'
}

const ProductsList = ({ background }: Props) => {
  const { id } = useParams()

  const [restaurante, setrestaurante] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setrestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h2>Carregando...</h2>
  }

  console.log(restaurante)

  return (
    <Container background={background}>
      <div className="container">
        <List>
          {restaurante &&
            restaurante.map((restaurant) => (
              <Product
                key={restaurant.id}
                id={restaurant.id}
                descricao={restaurant.descricao}
                foto={restaurant.cardapio.foto}
                nome={restaurant.cardapio.nome}
                porcao={restaurant.cardapio.porcao}
                preco={restaurant.cardapio.preco}
              />
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
