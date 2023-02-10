export type ActionType =
  | 'function-history'
  | 'search'
  | 'history'
  | 'edit'
  | 'deactivate'
  | 'add-custom'
  | 'add-from-template'

export interface IEntityContext {
  currentEntity: { id: number; name: string; content?: any }
  setCurrentEntity: (currentEntity: {
    id: number
    name: string
    content?: any
  }) => void
  action: ActionType | null
  setAction: (action: ActionType | null) => void
}
