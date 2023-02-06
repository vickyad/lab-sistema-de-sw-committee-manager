import React, { useState, createContext } from 'react'
import { getEmptyEntity } from '../utils/EmptyEntity'

interface IEntityContext {
  currentEntity: { id: number; name: string; content?: any }
  setCurrentEntity: (currentEntity: {
    id: number
    name: string
    content?: any
  }) => void
  action: null | string
  setAction: (action: string | null) => void
}

export const EntityContext = createContext<IEntityContext>({
  currentEntity: getEmptyEntity(),
  setCurrentEntity: () => {},
  action: null,
  setAction: () => {},
})

export const EntityProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentEntity, setCurrentEntity] = useState(getEmptyEntity())
  const [action, setAction] = useState<string | null>(null)

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
