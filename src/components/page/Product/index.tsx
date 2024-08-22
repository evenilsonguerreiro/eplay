import Hero from '../../Hero'
import Section from '../../Section'
import Gallery from '../../../components/Gallery'

import { useEffect, useState } from 'react'
import { Game } from '../Home'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [id])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Indioma:</b> O jogo oferece suporte a diversos idiomas, incluido{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <div>
        <Gallery
          name={game.name}
          defaultCover={game.media.cover}
          items={game.media.gallery}
        />
      </div>
    </>
  )
}
export default Product
