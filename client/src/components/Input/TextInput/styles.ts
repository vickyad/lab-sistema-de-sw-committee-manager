import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  gap: 0.75rem;
`

export const Label = styled.label<{ size: 'default' | 'lg' }>`
  font-weight: 600;
  font-size: ${({ size }) => (size === 'lg' ? '1.25rem' : '1rem')};
  min-width: 7.3rem;
  text-align: right;
`

export const Required = styled.span`
  color: #c43838;
`

export const InputContainer = styled.input`
  background-color: transparent;
  border: 1px solid #00000033;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
  width: 70%;
`
