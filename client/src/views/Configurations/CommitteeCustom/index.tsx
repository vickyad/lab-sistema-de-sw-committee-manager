import { useContext, useState } from "react"
import Button from "../../../components/Button"
import HeaderSecondary from "../../../components/Header/HeaderSecondary"
import Icon from "../../../components/Icon"
import Checkbox from "../../../components/Input/Checkbox"
import TextInput from "../../../components/Input/TextInput"
import Title from "../../../components/Title"
import { EntityContext } from "../../../context/CommitteeContext"
import { committeePostDTO } from "../../../types/requestAnswerTypes"
import RequestManager from "../../../utils/RequestManager"
import { FlexContainer, FieldsContainer, InfoContainer } from "./styles"

const CommitteeCustom = () => {
	const { setAction } = useContext(EntityContext)
	const [createTemplate, setCreateTemplate] = useState(false)
	const [committeeInfo, setCommitteeInfo] = useState({
		name: "",
		bond: "",
		ordinance: "",
		term: "",
		begin_date: "",
		end_date: "",
		observations: "",
	})

	const updateBackend = (committeeInfo_string: any) => {
		let committeeInfo_dto = {
			name: committeeInfo_string.name,
			bond: committeeInfo_string.bond,
			term: parseInt(committeeInfo_string.term),
			begin_date: new Date(committeeInfo_string.begin_date),
			end_date: new Date(committeeInfo_string.end_date),
			ordinance: committeeInfo_string.ordinance,
			is_active: true,
		} as committeePostDTO

		RequestManager.createCommittee(committeeInfo_dto)
	}

	return (
		<div>
			<HeaderSecondary headerTitle="ADICIONAR COMITÊ" buttonType="save" backButtonMsg="voltar às configurações" />
			<FlexContainer>
				<TextInput
					label="Órgão"
					required
					value={committeeInfo.name}
					handleChange={(newValue: string) => setCommitteeInfo({ ...committeeInfo, name: newValue })}
					size="lg"
				/>
				<TextInput
					label="Vínculo"
					value={committeeInfo.bond}
					handleChange={(newValue: string) => setCommitteeInfo({ ...committeeInfo, bond: newValue })}
					size="lg"
				/>
			</FlexContainer>
			<Title type="subsection">Preencha os campos</Title>
			<InfoContainer>
				<FieldsContainer>
					<TextInput
						label="Portaria"
						value={committeeInfo.ordinance}
						handleChange={(newValue: string) => setCommitteeInfo({ ...committeeInfo, ordinance: newValue })}
					/>
					<TextInput
						label="Mandato"
						value={committeeInfo.term}
						handleChange={(newValue: string) => setCommitteeInfo({ ...committeeInfo, term: newValue })}
					/>
					<TextInput
						type="date"
						label="Data de início"
						value={committeeInfo.begin_date}
						handleChange={(newValue: string) =>
							setCommitteeInfo({ ...committeeInfo, begin_date: newValue })
						}
					/>
					<TextInput
						type="date"
						label="Data de fim"
						value={committeeInfo.end_date}
						handleChange={(newValue: string) => setCommitteeInfo({ ...committeeInfo, end_date: newValue })}
					/>
					<TextInput
						label="Notas"
						value={committeeInfo.observations}
						handleChange={(newValue: string) =>
							setCommitteeInfo({ ...committeeInfo, observations: newValue })
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
						updateBackend(committeeInfo)
						setAction(null)
					}}
					type="save"
				>
					<Icon type="save" />
					Salvar alterações
				</Button>
			</FlexContainer>
		</div>
	)
}
export default CommitteeCustom
