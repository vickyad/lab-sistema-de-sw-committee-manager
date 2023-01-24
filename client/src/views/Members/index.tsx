import { useState } from 'react'
import HeaderPrimary from '../../components/Header/HeaderPrimary'
import Table from '../../components/Table'
import { MemberTable } from '../../data/membersTable'
import { member_mock } from '../../_mock/members'

const MembersView = () => {
  const [searchtext, setSearchText] = useState('')

  return (
    <div>
      <HeaderPrimary
        headerTitle="Comissões por pessoa"
        searchPlaceholder="Pesquise pelo nome do funcionário..."
        searchText={searchtext}
        setSearchText={(input) => setSearchText(input)}
        handleClick={() => {
          /* TODO */
        }}
      />
      <Table type={'members'} content={member_mock} headerInfo={MemberTable} />
    </div>
  )
}
export default MembersView
