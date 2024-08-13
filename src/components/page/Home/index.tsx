import Game from '../../../models/Game'
import Banner from '../../Banner'
import ProductList from '../../ProductList'

import resident from '../../../assets/imagem/resident.png'
import zelda from '../../../assets/imagem/zelda.png'
import star_wars from '../../../assets/imagem/star_wars.png'
import diablo from '../../../assets/imagem/diablo.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'RPG',
    description: 'jgdbhvgvfjjqlkkrnsbvgcfflmbagf begdhjnajhdterq',
    title: 'resident',
    infos: ['17/04/2025'],
    image: resident,
    sistem: 'windows'
  },
  {
    id: 2,
    category: 'RPG',
    description: 'jgdbhvgvfjjqlkkrnsbvgcfflmbagf begdhjnajhdterq',
    title: 'zelda',
    infos: ['17/04/2025'],
    image: zelda,
    sistem: 'windows'
  },
  {
    id: 3,
    category: 'RPG',
    description: 'jgdbhvgvfjjqlkkrnsbvgcfflmbagf begdhjnajhdterq',
    title: 'star wars',
    infos: ['17/04/2025'],
    image: star_wars,
    sistem: 'windows'
  },
  {
    id: 4,
    category: 'RPG',
    description: 'jgdbhvgvfjjqlkkrnsbvgcfflmbagf begdhjnajhdterq',
    title: 'diablo 4',
    infos: ['17/04/2025'],
    image: diablo,
    sistem: 'windows'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description: 'jgdbhvgvfjjqlkkrnsbvgcfflmbagf begdhjnajhdterq',
    title: 'resident',
    infos: ['17/04/2025'],
    image: resident,
    sistem: 'windows'
  },
  {
    id: 6,
    category: 'RPG',
    description: 'jgdbhvgvfjjqlkkrnsbvgcfflmbagf begdhjnajhdterq',
    title: 'zelda',
    infos: ['17/04/2025'],
    image: zelda,
    sistem: 'windows'
  },
  {
    id: 7,
    category: 'RPG',
    description: 'jgdbhvgvfjjqlkkrnsbvgcfflmbagf begdhjnajhdterq',
    title: 'star wars',
    infos: ['17/04/2025'],
    image: star_wars,
    sistem: 'windows'
  },
  {
    id: 8,
    category: 'RPG',
    description: 'jgdbhvgvfjjqlkkrnsbvgcfflmbagf begdhjnajhdterq',
    title: 'diablo 4',
    infos: ['17/04/2025'],
    image: diablo,
    sistem: 'windows'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em breve" background="black" />
  </>
)
export default Home
