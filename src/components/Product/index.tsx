import Tag from '../Tag'
import { Card, Descricacao, Infos, Titulo } from './styles'

type Props = {
  title: string
  category: string
  sistem: string
  description: string
  image: string
  infos: string[]
}

const Product = ({
  title,
  category,
  sistem,
  description,
  image,
  infos
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return descricao
  }
  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{sistem}</Tag>
      <Descricacao>{getDescricao(description)}</Descricacao>
    </Card>
  )
}

export default Product
