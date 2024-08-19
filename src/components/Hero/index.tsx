import Fundo_hogwarts from '../../assets/imagem/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${Fundo_hogwarts})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>

      <Infos>
        <h2>Hongwast legs</h2>
        <p>
          <span>De R$ 250,00 </span>
          Por R$ 190,00
        </p>
        <Button type={'button'} title={'click aqui'} variant={'primary'}>
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)
export default Hero
