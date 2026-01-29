import { Link, useParams } from 'react-router-dom'

import {
  HeaderBar,
  CategoryHeader,
  HeroText,
  LinkCart,
  Logo,
  HeaderResto,
  CapaResto,
  Category,
  HeaderTitle
} from './styles'
import { useGetMenuRestaurantQuery } from '../../services/api'
import logo from '../../assets/images/logo.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => (
  <HeaderBar>
    <Logo>
      <Link to="/">
        <img src={logo} alt="eFood" />
      </Link>
    </Logo>
    <HeroText>Viva experiências gastronômicas no conforto da sua casa</HeroText>
  </HeaderBar>
)

export default Header

export const HeaderRestaurante = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetMenuRestaurantQuery(id!)

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (!restaurant) return <h4>Carregando...</h4>

  return (
    <HeaderBar>
      <HeaderResto>
        <div className="container">
          <CategoryHeader>
            <h2>Restaurantes</h2>
            <Link to="/">
              <img src={logo} alt="eFood" />
            </Link>
            <LinkCart onClick={openCart}>
              {items.length} produto(s) no carrinho
            </LinkCart>
          </CategoryHeader>
        </div>
      </HeaderResto>
      <CapaResto style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <div className="container">
          {restaurant.tipo && <Category>{restaurant.tipo}</Category>}
          {restaurant.titulo && <HeaderTitle>{restaurant.titulo}</HeaderTitle>}
        </div>
      </CapaResto>
    </HeaderBar>
  )
}
