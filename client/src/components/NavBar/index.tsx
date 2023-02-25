import Icon from '../Icon'
import { INavBar, TabType } from './types'
import { Container, Label, Link, LinkContainer } from './styles'
import { useState, useEffect, useContext } from 'react'
import { EntityContext } from '../../context/CommitteeContext'
import { getEmptyEntity } from '../../utils/EmptyEntity'

const NavBar = ({ data }: INavBar) => {
  const [tabSelected, setTabSelected] = useState<TabType>('committee')
  const { setAction, setCurrentEntity } = useContext(EntityContext)

  const handleClick = () => {
    setAction(null)
    setCurrentEntity(getEmptyEntity())
  }

  useEffect(() => {
    let path = window.location.pathname
    const currentTab = path === '/' ? 'committee' : path.slice(1)
    setTabSelected(currentTab as TabType)
  }, [tabSelected])

  return (
    <Container>
      <LinkContainer>
        {data.map((page) => (
          <>
            <Link
              href={page.href}
              selected={tabSelected === page.id}
              key={`${page.icon}-link`}
              onClick={handleClick}
            >
              <Icon type={page.icon} />
              <Label>{page.label}</Label>
            </Link>
          </>
        ))}
      </LinkContainer>
    </Container>
  )
}
export default NavBar
