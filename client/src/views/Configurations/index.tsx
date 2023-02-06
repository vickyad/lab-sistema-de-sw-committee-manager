import { useContext, useState } from 'react'
import { EntityContext } from '../../context/CommitteeContext'
import CommitteeCustom from './CommitteeCustom'
import CommitteeFromTemplate from './CommitteeFromTemplate'
import OptionsMenu from './OptionsMenu'

const ConfigurationsView = () => {
  const { action } = useContext(EntityContext)

  return (
    <>
      {action === 'add-from-template' ? (
        <CommitteeFromTemplate />
      ) : action === 'add-custom' ? (
        <CommitteeCustom />
      ) : (
        <OptionsMenu />
      )}
    </>
  )
}
export default ConfigurationsView
