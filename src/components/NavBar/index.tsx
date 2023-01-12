import Icon from '../Icon'
import { INavBar } from './types'
import { Container, Link } from './styles'
import { useState } from 'react'

const NavBar = ({ data }: INavBar) => {
  const [selected, setSelected] = useState(data[0].icon)
  return (
    <Container>
      <nav>
        {data.map((item) => (
          <Link href={item.href} selected={selected === item.icon}>
            <Icon type={item.icon} />
          </Link>
        ))}
      </nav>
    </Container>
  )
}
export default NavBar
