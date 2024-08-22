import { useParams } from 'react-router-dom'
import Hero from '../../Hero'
import Section from '../../Section'
import Gallery from '../../../components/Gallery'

import resdent from '../../../assets/imagem/resident.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          illo quas vero, velit ab sequi accusantium alias eum non provident
          voluptas? Tempore exercitationem atque numquam, nisi aperiam
          doloremque rem accusamus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptates illo quas vero, velit ab sequi
          accusantium alias eum non provident voluptas? Tempore exercitationem
          atque numquam, nisi aperiam doloremque rem accusamus.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Voluptates illo quas</b> <br /> vero, velit ab sequi alias eum
          <b>non provident voluptas</b> <br /> Tempore exercitationem numquam,
          <b>nisi aperiam doloremque</b> <br /> rem accusamus. Lorem ipsum dsit
          <b>amet consectetur adipisicing</b> <br /> elit. Voluptates illo vero,
          <b>velit ab sequi accusantium</b> <br /> alias eum non voluptas?
          <b>Tempore exercitationem</b> <br /> nisi aperiam doloremque
        </p>
      </Section>
      <div>
        <Gallery name="jogo teste" defaultCover={resdent} />
      </div>
    </>
  )
}
export default Product
