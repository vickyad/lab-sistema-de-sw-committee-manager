import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(15, minmax(0, 1fr));
  grid-column-gap: 1rem;
  background-color: #31708e;
  color: white;
  text-transform: uppercase;
  padding: 0.625rem 0.938rem;
  font-size: 0.875rem;
  border-radius: 0.5rem 0.5rem 0 0;
  font-weight: 600;
`

export const ColumnHeader = styled.h3<{ size: number }>`
  ${({ size }) =>
    css`
      grid-column: span ${size} / span ${size};
    `}
`
