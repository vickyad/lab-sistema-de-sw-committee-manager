import { useContext, useState } from "react"
import Button from "../../../components/Button"
import HeaderSecondary from "../../../components/Header/HeaderSecondary"
import Icon from "../../../components/Icon"
import Checkbox from "../../../components/Input/Checkbox"
import Dropdown from "../../../components/Input/Dropdown"
import TextInput from "../../../components/Input/TextInput"
import Title from "../../../components/Title"
import { EntityContext } from "../../../context/CommitteeContext"
import { FlexContainer, FieldsContainer, BondContainer, BondText, InfoContainer } from "./styles"

const CommitteeFromTemplate = () => {
	const { setAction } = useContext(EntityContext)
	const [createTemplate, setCreateTemplate] = useState(false)
	const [committeeInfo, setCommitteeInfo] = useState({
		name: "",
		bond: "",
		ordinance: "",
		term: "",
		beginDate: "",
		endDate: "",
		notes: "",
	})

	return (
		<div>
			<HeaderSecondary
				headerTitle="ADICIONAR COMITÊ DE TEMPLATE"
				buttonType="save"
				backButtonMsg="voltar às comissões"
			/>
			<FlexContainer>
				<BondContainer>
					<Dropdown
						label="Órgão"
						required
						placeholder={"Selecione um órgão"}
						options={[]}
						optionSelected={{
							id: 0,
							name: "",
						}}
						setOptionSelected={function (option: { id: number; name: string }): void {
							throw new Error("Function not implemented.")
						}}
					/>
				</BondContainer>
				{committeeInfo.name.length > 0 && (
					<BondContainer>
						<Title type="subsection">Vínculo:</Title>
						<BondText>mock</BondText>
					</BondContainer>
				)}
			</FlexContainer>
			{committeeInfo.name.length > 0 && (
				<>
					<Title type="subsection">Preencha os campos</Title>
					<InfoContainer>
						<FieldsContainer>
							<TextInput
								label="Portaria"
								value={committeeInfo.ordinance}
								handleChange={(newValue: string) =>
									setCommitteeInfo({ ...committeeInfo, ordinance: newValue })
								}
							/>
							<TextInput
								label="Mandato"
								value={committeeInfo.term}
								handleChange={(newValue: string) =>
									setCommitteeInfo({ ...committeeInfo, term: newValue })
								}
							/>
							<TextInput
								type="date"
								label="Data de início"
								value={committeeInfo.beginDate}
								handleChange={(newValue: string) =>
									setCommitteeInfo({ ...committeeInfo, beginDate: newValue })
								}
							/>
							<TextInput
								type="date"
								label="Data de fim"
								value={committeeInfo.endDate}
								handleChange={(newValue: string) =>
									setCommitteeInfo({ ...committeeInfo, endDate: newValue })
								}
							/>
							<TextInput
								label="Notas"
								value={committeeInfo.notes}
								handleChange={(newValue: string) =>
									setCommitteeInfo({ ...committeeInfo, notes: newValue })
								}
							/>
						</FieldsContainer>
						<div>Tabela de membros</div>
					</InfoContainer>
					<Checkbox
						label="Criar template para esse órgão"
						checked={createTemplate}
						handleClick={() => setCreateTemplate(!createTemplate)}
					/>
					<FlexContainer>
						<Button title="cancelar alterações" handleClick={() => setAction(null)} type="primary">
							<Icon type="cancel" />
							Cancelar
						</Button>
						<Button
							title="salvar alterações"
							handleClick={() => {
								/* TODO: handle save committee */
							}}
							type="save"
						>
							<Icon type="save" />
							Salvar alterações
						</Button>
					</FlexContainer>
				</>
			)}
		</div>
	)
}
export default CommitteeFromTemplate
