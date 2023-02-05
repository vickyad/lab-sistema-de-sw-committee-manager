import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Label = styled.label`
  font-weight: 500;
  font-size: 1.25rem;
  margin-right: 1rem;
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
  padding: 0.3rem 0.5rem;
  width: 70%;
`
