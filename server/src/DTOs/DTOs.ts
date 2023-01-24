export type CreateMemberDTO = {
  name: string
  is_active: boolean
  //committees?: CommitteeDTO
}

export type CreateCommitteeDTO = {
  bond: string
  name: string
  begin_date: Date | null
  end_date: Date | null
  term: number | null
  ordinance: string | null
  observations: string | null
  is_active: boolean
}