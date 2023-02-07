import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0 3rem;
  align-items: center;
`

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 0;
`

export const BondContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`

export const BondText = styled.p`
  margin-left: 0.5rem;
`
