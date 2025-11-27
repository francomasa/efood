// import Banner from '../../components/Banner'
import Header from '../../components/Header'
import RestauranteList from '../../components/RestauranteList'
import { listaRestaurantes } from '../../listaResto'
const Home = () => (
  <>
    <Header />
    <div className="container">
      <RestauranteList background="white" restaurantes={listaRestaurantes} />
    </div>
  </>
)

export default Home
