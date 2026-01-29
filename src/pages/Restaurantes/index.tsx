import ProductsList from '../../components/ProductsList'

import { HeaderRestaurante } from '../../components/Header'
import { useParams } from 'react-router-dom'

import { useGetMenuRestaurantQuery } from '../../services/api'

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Restaurant = () => {
  const parametros = useParams()
  console.log(parametros)
  const { data: restaurant } = useGetMenuRestaurantQuery(parametros.id!)

  if (!restaurant) return <h4>Carregando...</h4>
  return (
    <>
      <HeaderRestaurante />
      <ProductsList restaurantes={restaurant} background="salmao" />
    </>
  )
}

export default Restaurant
