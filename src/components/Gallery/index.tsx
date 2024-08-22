import { useState } from 'react'
import { GalleryItem } from '../page/Home'

import banner from '../../assets/imagem/banner-homem-aranha.png'
import zoom from '../../assets/imagem/zoom.png'
import play from '../../assets/imagem/play.png'
import fundo from '../../assets/imagem/fundo_hogwarts.png'
import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'
import fechar from '../../assets/imagem/fechar.png'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: banner
  },
  {
    type: 'image',
    url: fundo
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

interface ModalState extends GalleryItem {
  inVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    inVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcom = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      inVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  inVisible: true,
                  type: media.type,
                  url: media.url
                })
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
      <Modal className={modal.inVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}
export default Gallery
