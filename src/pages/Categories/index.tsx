// import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { HeaderRestaurante } from '../../components/Header'
import { cardapio } from '../../listaResto'

const Categories = () => (
  <>
    <HeaderRestaurante />
    <ProductsList background="salmao" cardapio={cardapio} />
  </>
)

export default Categories
