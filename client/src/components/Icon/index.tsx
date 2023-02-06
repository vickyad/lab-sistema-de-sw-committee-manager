import ArrowLeftIcon from './ArrowLeftIcon'
import CancelIcon from './CancelIcon'
import ChevronIcon from './ChevronIcon'
import ComitteeIcon from './ComitteeIcon'
import ConfigurationsIcon from './ConfigurationsIcon'
import CSVIcon from './CSVIcon'
import DisableIcon from './DisableIcon'
import DownloadIcon from './DownloadIcon'
import EditIcon from './EditIcon'
import HistoryIcon from './HistoryIcon'
import MembersIcon from './MembersIcon'
import MinusIcon from './MinusIcon'
import OptionsIcon from './OptionsIcon'
import PDFIcon from './PDFIcon'
import PlusIcon from './PlusIcon'
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
      case 'minus':
        return <MinusIcon />
      case 'plus':
        return <PlusIcon />
      case 'cancel':
        return <CancelIcon />
      case 'pdf':
        return <PDFIcon />
      case 'csv':
        return <CSVIcon />
      default:
        return null
    }
  }
  return icon()
}
export default Icon
