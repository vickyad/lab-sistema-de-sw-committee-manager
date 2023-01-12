import ComitteeIcon from './ComitteeIcon'
import ConfigurationsIcon from './ConfigurationsIcon'
import MembersIcon from './MembersIcon'
import SearchIcon from './SearchIcon'
import { IIcon } from './types'

const Icon = ({ type }: IIcon) => {
  const icon = () => {
    switch (type) {
      case 'comittee':
        return <ComitteeIcon />
      case 'members':
        return <MembersIcon />
      case 'configuration':
        return <ConfigurationsIcon />
      case 'search':
        return <SearchIcon />
      default:
        return null
    }
  }
  return icon()
}
export default Icon
