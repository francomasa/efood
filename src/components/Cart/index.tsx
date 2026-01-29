import Button from '../Button'

import { CartContainer, CartItem, Overlay, Quantity, SideBar } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { formatPrice } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      const precoAtual = valorAtual.cardapio[0].preco
      // const precoAtual = valorAtual.cardapio.map((item) => (item.id === valorAtual.cardapio)
      // console.log(valorAtual.cardapio.map((item) => item.preco))
      return (acumulador += precoAtual)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.cardapio[0].foto} alt={item.titulo} />
                  <div>
                    <h3>{item.cardapio[0].nome}</h3>
                    <span>{formatPrice(item.cardapio[0].preco)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </CartItem>
              ))}
            </ul>
            <Quantity>
              Valor total <span>{formatPrice(getTotalPrice())}</span>
            </Quantity>

            <Button
              type="button"
              background="salmao"
              title="Clique aqui para continuar com a compra"
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <Quantity>Não a pedidos no carrinho</Quantity>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
