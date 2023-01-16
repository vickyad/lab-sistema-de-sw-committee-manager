import { PrimaryTitle, SecondaryTitle } from './styles'
import { ITitle } from './types'

const Title = ({ children, type }: ITitle) => {
  return (
    <>
      {type === 'primary' ? (
        <PrimaryTitle>{children}</PrimaryTitle>
      ) : (
        <SecondaryTitle>{children}</SecondaryTitle>
      )}
    </>
  )
}
export default Title
