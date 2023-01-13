import { Container, Item } from './styles'

const TableRow = ({ content, sizes }: { content: any[]; sizes: any[] }) => {
  return (
    <Container>
      {content.map((item: any, index: number) => (
        <Item size={sizes[index]}>{item}</Item>
      ))}
      <p style={{ gridColumnStart: 14 }}>editar</p>
      <p style={{ gridColumnStart: 15 }}>expandir</p>
    </Container>
  )
}
export default TableRow
