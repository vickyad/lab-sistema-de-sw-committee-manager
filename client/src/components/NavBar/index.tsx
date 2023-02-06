import Icon from '../Icon'
import { INavBar } from './types'
import { Container, Link, LinkContainer } from './styles'
import { useState, useEffect, useContext } from 'react'
import { EntityContext } from '../../context/CommitteeContext'
import { getEmptyEntity } from '../../utils/EmptyEntity'

const NavBar = ({ data }: INavBar) => {
  const [tabSelected, setTabSelected] = useState('')
  const { setAction, setCurrentEntity } = useContext(EntityContext)

  const handleClick = () => {
    setAction(null)
    setCurrentEntity(getEmptyEntity())
  }

  useEffect(() => {
    let path = window.location.pathname
    const currentTab = path === '/' ? 'comittee' : path.slice(1)
    setTabSelected(currentTab)
  }, [])

  return (
    <Container>
      <LinkContainer>
        {data.map((item) => (
          <Link
            href={item.href}
            selected={tabSelected === item.icon}
            key={`${item.icon}-link`}
            onClick={handleClick}
          >
            <Icon type={item.icon} />
          </Link>
        ))}
      </LinkContainer>
    </Container>
  )
}
export default NavBar
