import banner from '../../assets/imagem/banner-homem-aranha.png'
import star_wars from '../../assets/imagem/star_wars.png'
import zoom from '../../assets/imagem/zoom.png'
import play from '../../assets/imagem/play.png'
import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'
import fechar from '../../assets/imagem/fechar.png'
import { useState } from 'react'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: banner
  },
  {
    type: 'image',
    url: star_wars
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/2SNF4M_v7wc?si=ewqCOnP2RSbWcEcR" '
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [ModalEstaAberto, setModalEstaAberto] = useState(false)
  const [ModalUrl, setModalUrl] = useState('')
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcom = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }
  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModalEstaAberto(true)
                setModalUrl(media.url)
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`media ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcom(media)}
                  alt="click aqui para maximizar a media"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={ModalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} onClick={() => setModalEstaAberto(false)} />
          </header>
          <img src={ModalUrl} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}
export default Gallery
