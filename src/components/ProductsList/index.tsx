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

  const [restaurante, setRestaurante] = useState<Restaurantes>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) return <h4>Carregando...</h4>
  const cardapio = restaurante.cardapio
  console.log(cardapio)

  return (
    <Container background={background}>
      <div className="container">
        <List>
          {cardapio.map((objeto) => (
            <>
              {console.log(objeto)}
              <Product
                key={objeto.id}
                id={objeto.id}
                descricao={objeto.descricao}
                foto={objeto.foto}
                nome={objeto.nome}
                porcao={objeto.porcao}
                preco={objeto.preco}
                restautanteId={restaurante.id}
              />
            </>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
