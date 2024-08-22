import { useEffect, useState } from 'react'
import Banner from '../../Banner'
import ProductList from '../../ProductList'

import resident from '../../../assets/imagem/resident.png'
import zelda from '../../../assets/imagem/zelda.png'
import star_wars from '../../../assets/imagem/star_wars.png'
import diablo from '../../../assets/imagem/diablo.png'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    linguages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])
  return (
    <>
      <Banner />
      <ProductList games={promocoes} title="Promoções" background="gray" />
      <ProductList games={emBreve} title="Em breve" background="black" />
    </>
  )
}
export default Home
