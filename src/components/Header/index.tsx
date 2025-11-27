import { Link } from 'react-router-dom'

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
    {/* <LinkCart href="#">0 produto(s) no carrinho</LinkCart> */}
  </HeaderBar>
)

export default Header

export const HeaderRestaurante = () => (
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
    <CapaResto>
      <div className="container">
        <Category>Italiana</Category>
        <HeaderTitle>La Dolce Vita Trattoria</HeaderTitle>
      </div>
    </CapaResto>
  </HeaderBar>
)
