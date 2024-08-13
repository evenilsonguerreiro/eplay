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
}: Props) => (
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
    <Descricacao>{description}</Descricacao>
  </Card>
)

export default Product
