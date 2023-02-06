import { PrimaryTitle, SecondaryTitle, SubsectionTitle } from './styles'
import { ITitle } from './types'

const Title = ({ children, type }: ITitle) => {
  const getTitle = () => {
    switch (type) {
      case 'primary':
        return <PrimaryTitle>{children}</PrimaryTitle>
      case 'secondary':
        return <SecondaryTitle>{children}</SecondaryTitle>
      case 'subsection':
        return <SubsectionTitle>{children}</SubsectionTitle>
      default:
        return <></>
    }
  }
  return <>{getTitle()}</>
}
export default Title
