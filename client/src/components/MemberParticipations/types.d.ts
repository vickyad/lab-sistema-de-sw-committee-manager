export interface IMemberParticipations {
  activeContent: { id: number; content: string[] }[]
  closedContent: { id: number; content: string[] }[]
  exportMode?: boolean
}
