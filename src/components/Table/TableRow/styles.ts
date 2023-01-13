import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(15, minmax(0, 1fr));
  grid-column-gap: 1rem;
  align-items: end;
  padding: 0.6rem 0.938rem;
  font-size: 0.75rem;
  border: 1px solid #00000017;

  & :first-child {
    font-size: 1rem;
  }
`

export const Item = styled.p<{ size: number }>`
  ${({ size }) =>
    css`
      grid-column: span ${size} / span ${size};
    `}
`
