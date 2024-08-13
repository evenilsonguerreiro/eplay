import { Link } from 'react-router-dom'
import { HeaderBar, LinkCard, LinkItem, Links } from './styles'
import logo from '../../assets/imagem/logo.svg'
import carrinho from '../../assets/imagem/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="eplay" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categories</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCard href="#">
      0 - Produto(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCard>
  </HeaderBar>
)

export default Header
