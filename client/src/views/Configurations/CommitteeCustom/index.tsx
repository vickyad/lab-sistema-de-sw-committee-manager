import HeaderSecondary from '../../../components/Header/HeaderSecondary'

const CommitteeCustom = () => {
  return (
    <div>
      <HeaderSecondary
        headerTitle="ADICIONAR FORMAÇÃO PERSONALIZADA"
        buttonType="save"
        backButtonMsg="voltar às configurações de banco de dados"
        handleExportOrSave={() => {
          /* TODO */
        }}
        handleCancel={() => {}}
      />
      Adicionar personalizado
    </div>
  )
}
export default CommitteeCustom
