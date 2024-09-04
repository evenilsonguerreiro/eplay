import { Game } from '../page/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

export const formatPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const ProductList = ({ title, background, games }: Props) => {
  const getGameTagas = (game: Game) => {
    const tagas = []

    if (game.release_date) {
      tagas.push(game.release_date)
    }

    if (game.prices.discount) {
      tagas.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tagas.push(formatPreco(game.prices.current))
    }
    return tagas
  }
  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTagas(game)}
                sistem={game.details.system}
                title={game.name}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
