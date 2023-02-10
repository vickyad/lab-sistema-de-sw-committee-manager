import React, { useState, createContext } from 'react'
import { getEmptyEntity } from '../../utils/EmptyEntity'
import { ActionType, IEntityContext } from './types.d'

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
