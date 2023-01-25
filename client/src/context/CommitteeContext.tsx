import React, { useState, createContext } from 'react'

interface IEntityContext {
  currentEntity: { id: number; name: string }
  setCurrentEntity: (currentEntity: { id: number; name: string }) => void
  action: null | string
  setAction: (action: string | null) => void
}

export const EntityContext = createContext<IEntityContext>({
  currentEntity: { id: -1, name: '' },
  setCurrentEntity: () => {},
  action: null,
  setAction: () => {},
})

export const EntityProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentEntity, setCurrentEntity] = useState({ id: -1, name: '' })
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
