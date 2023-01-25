export type TableTypesBase = 'committee' | 'members'

export type TableTypesExtended =
  | TableTypesBase
  | 'committee-details'
  | 'members-details'
