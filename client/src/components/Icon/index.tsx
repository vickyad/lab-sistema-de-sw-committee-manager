import ArrowLeftIcon from './ArrowLeftIcon'
import ChevronIcon from './ChevronIcon'
import ComitteeIcon from './ComitteeIcon'
import ConfigurationsIcon from './ConfigurationsIcon'
import DisableIcon from './DisableIcon'
import DownloadIcon from './DownloadIcon'
import EditIcon from './EditIcon'
import HistoryIcon from './HistoryIcon'
import MembersIcon from './MembersIcon'
import OptionsIcon from './OptionsIcon'
import SaveIcon from './SaveIcon'
import SearchIcon from './SearchIcon'
import { IIcon } from './types'

const Icon = ({ type, position = 'down' }: IIcon) => {
  const icon = () => {
    switch (type) {
      case 'comittee':
        return <ComitteeIcon />
      case 'members':
        return <MembersIcon />
      case 'configurations':
        return <ConfigurationsIcon />
      case 'search':
        return <SearchIcon />
      case 'chevron':
        return <ChevronIcon position={position} />
      case 'options':
        return <OptionsIcon />
      case 'history':
        return <HistoryIcon />
      case 'edit':
        return <EditIcon />
      case 'disable':
        return <DisableIcon />
      case 'download':
        return <DownloadIcon />
      case 'arrow-left':
        return <ArrowLeftIcon />
      case 'save':
        return <SaveIcon />
      default:
        return null
    }
  }
  return icon()
}
export default Icon
