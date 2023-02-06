import HeaderSecondary from '../../../components/Header/HeaderSecondary'

const CommitteeFromTemplate = () => {
  return (
    <div>
      <HeaderSecondary
        headerTitle="ADICIONAR FORMAÇÃO DE TEMPLATE"
        buttonType="save"
        backButtonMsg="voltar às comissões"
        handleExportOrSave={() => {
          /* TODO */
        }}
        handleCancel={() => {}}
      />
      Adicionar de template
    </div>
  )
}
export default CommitteeFromTemplate
