import ProductsList from '../../components/ProductsList'

import { HeaderRestaurante } from '../../components/Header'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurantes } from '../Home'

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Restaurant = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurantes>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) return <h4>Carregando...</h4>
  return (
    <>
      <HeaderRestaurante />
      <ProductsList restaurantes={restaurante} background="salmao" />
    </>
  )
}

export default Restaurant
