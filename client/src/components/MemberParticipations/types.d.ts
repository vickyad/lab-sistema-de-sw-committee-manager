export interface IMemberParticipations {
  active_participations: { id: number; content: string[] }[]
  history: { id: number; content: string[] }[]
  exportMode?: boolean
}
