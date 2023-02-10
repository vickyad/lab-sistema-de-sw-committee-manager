import React, { useState, createContext } from 'react'
import { getEmptyEntity } from '../utils/EmptyEntity'

export type ActionType =
  | 'function-history'
  | 'search'
  | 'history'
  | 'edit'
  | 'deactivate'
  | 'add-custom'
  | 'add-from-template'

interface IEntityContext {
  currentEntity: { id: number; name: string; content?: any }
  setCurrentEntity: (currentEntity: {
    id: number
    name: string
    content?: any
  }) => void
  action: ActionType | null
  setAction: (action: ActionType | null) => void
}

export const EntityContext = createContext<IEntityContext>({
  currentEntity: getEmptyEntity(),
  setCurrentEntity: () => {},
  action: null,
  setAction: () => {},
})

export const EntityProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentEntity, setCurrentEntity] = useState(getEmptyEntity())
  const [action, setAction] = useState<ActionType | null>(null)

  return (
    <EntityContext.Provider
      value={{
        currentEntity,
        setCurrentEntity,
        action,
        setAction,
      }}
    >
      {children}
    </EntityContext.Provider>
  )
}
