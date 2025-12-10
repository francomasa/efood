import Header from '../../components/Header'
import RestauranteList from '../../components/RestauranteList'

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

export const getDescrition = (descricao: string) => {
  if (descricao.length > 263) {
    return descricao.slice(0, 263) + '...'
  }
  return descricao
}

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <RestauranteList background="white" />
      </div>
    </>
  )
}

export default Home
