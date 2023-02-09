import { useContext } from 'react'
import HeaderSecondary from '../../../components/Header/HeaderSecondary'
import { EntityContext } from '../../../context/CommitteeContext'

const FunctionHistory = () => {
  const { currentEntity } = useContext(EntityContext)

  return (
    <>
      <HeaderSecondary
        headerTitle={`HISTÓRICO - ${currentEntity.name}`}
        buttonType="export"
        backButtonMsg="voltar às comissões"
        handleExport={(type) => {
          /* TODO */
          console.log(type)
        }}
      />
      Bora ver o histórico de um cargo: {currentEntity.id}, {currentEntity.name}
    </>
  )
}
export default FunctionHistory
