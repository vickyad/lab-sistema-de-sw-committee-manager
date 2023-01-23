import { useState } from 'react'
import Header from '../../components/Header'
import Table from '../../components/Table'
import { MemberTable } from '../../data/membersTable'
import { member_mock } from '../../_mock/members'

const MembersView = () => {
  const [searchtext, setSearchText] = useState('')

  return (
    <div>
      <Header
        headerTitle="Comissões por pessoa"
        searchPlaceholder="Pesquise pelo nome do funcionário..."
        searchText={searchtext}
        setSearchText={(input) => setSearchText(input)}
      />
      <Table type={'members'} content={member_mock} headerInfo={MemberTable} />
    </div>
  )
}
export default MembersView
