import { Link } from 'react-router-dom'
import { Container, FooterSection, Links } from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/icons/instagram.png'
import facebook from '../../assets/icons/facebook.png'
import twitter from '../../assets/icons/twitter.png'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <div>
          <Link to="/">
            <img src={logo} alt="eFood" />
          </Link>
          <Links>
            <li>
              <Link to="#instagram">
                <img src={instagram} alt="instagram" />
              </Link>
            </li>
            <li>
              <Link to="#facebook">
                <img src={facebook} alt="Facebbok" />
              </Link>
            </li>
            <li>
              <Link to="#twitter">
                <img src={twitter} alt="twitter" />
              </Link>
            </li>
          </Links>
        </div>
      </FooterSection>
      <p>
        ${currentYear} - &copy; A efood é uma plataforma para divulgação de
        estabelecimentos, a responsabilidade pela entrega, qualidade dos
        produtos é toda do estabelecimento contratado.{' '}
      </p>
    </div>
  </Container>
)

export default Footer
