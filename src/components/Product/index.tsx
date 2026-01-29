import { useState } from 'react'
import {
  Card,
  CardHeader,
  TituloCard,
  DescriçaoCard,
  Modal,
  ModalContent
} from './styles'
import Button from '../Button'
import { getDescrition } from '../../pages/Home'
import closeImg from '../../assets/icons/close.png'
import { Restaurantes } from '../../pages/Home'
import { formatPrice } from '../../pages/Restaurantes'
import { useDispatch } from 'react-redux'
import { add, open, close } from '../../store/reducers/cart'

export type Cardapio = {
  id: number
  foto: string
  descricao: string
  nome: string
  porcao: string
  preco: number
}

type Props = {
  restaurante: Restaurantes
  menu: Cardapio
}

interface ModalState {
  isVisible: boolean
  url: string
}

const Product = ({ restaurante, menu }: Props) => {
  const cardapio = menu

  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    url: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      url: ''
    })
    closeCart()
  }

  const openCart = () => {
    dispatch(open())
  }

  const closeCart = () => {
    dispatch(close())
  }

  const addItemDoMenu = () => {
    dispatch(add(menu))
    openCart()
  }

  return (
    <>
      <Card>
        <img src={cardapio.foto} alt={cardapio.nome} />
        <CardHeader>
          <TituloCard>{cardapio.nome}</TituloCard>
        </CardHeader>
        <DescriçaoCard>{getDescrition(cardapio.descricao)}</DescriçaoCard>

        <Button
          background="white"
          type="link"
          to={`/restaurantes/product/${restaurante.id}`}
          title="Clique aqui para adicionar ao carrinho de compras"
          onClick={() => {
            setModal({
              isVisible: true,
              url: modal.url
            })
          }}
        >
          Adicionar ao carrinho
        </Button>
      </Card>

      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <img
              src={closeImg}
              alt="Clique aqui para fechar a mídia"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          <div>
            <img src={cardapio.foto} alt={cardapio.nome} />
            <div>
              <h2>{cardapio.nome}</h2>
              <p className="descricao">{cardapio.descricao}</p>
              <p>Serve: {cardapio.porcao}</p>
              <Button
                key={cardapio.id}
                background="salmao"
                type="button"
                to={`/restaurantes/${restaurante.id}/product/${cardapio.id}/add`}
                title="Clique aqui para adicionar ao carrinho de compras"
                onClick={() => {
                  addItemDoMenu()
                }}
              >
                {`Adicionar ao carrinho - R$ ${formatPrice(cardapio.preco)}`}
              </Button>
            </div>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}
export default Product
