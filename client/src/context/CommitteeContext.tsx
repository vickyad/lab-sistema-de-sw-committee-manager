import React, { useState, createContext } from 'react'

interface ICommitteeContext {
  currentCommittee: { id: number; name: string }
  setCurrentCommittee: (currentCommittee: { id: number; name: string }) => void
  action: null | string
  setAction: (action: string | null) => void
}

export const CommitteeContext = createContext<ICommitteeContext>({
  currentCommittee: { id: -1, name: '' },
  setCurrentCommittee: () => {},
  action: null,
  setAction: () => {},
})

export const CommitteeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [currentCommittee, setCurrentCommittee] = useState({ id: -1, name: '' })
  const [action, setAction] = useState<string | null>(null)

  return (
    <CommitteeContext.Provider
      value={{ currentCommittee, setCurrentCommittee, action, setAction }}
    >
      {children}
    </CommitteeContext.Provider>
  )
}
