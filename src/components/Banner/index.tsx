import { Imagem, TituloBanner, PrecoBanner } from './styles'

import bannerImg from '../../assets/images/fundo.png'
import Tag from '../Tag'
// import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <TituloBanner>
          Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5
        </TituloBanner>

        <PrecoBanner>
          De <span>R$ 250,00</span>
          <br />
          por apenas R$ 99,90
        </PrecoBanner>
      </div>
      {/* <Button
        type="link"
        to="/produtos"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button> */}
    </div>
  </Imagem>
)

export default Banner
