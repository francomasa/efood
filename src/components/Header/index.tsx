import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurantes } from '../../pages/Home'

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

import logo from '../../assets/images/logo.png'

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

  const [restaurant, setRestaurant] = useState<Restaurantes>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

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
            <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
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
