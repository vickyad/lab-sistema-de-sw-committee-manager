import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  background-color: #f7f9fb;

  &:nth-child(even) {
    background-color: #f2f3f4;
  }
`

export const RowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(15, minmax(0, 1fr));
  grid-column-gap: 1rem;
  align-items: center;
  padding: 0.6rem 0.938rem;
  font-size: 0.75rem;
`

export const Item = styled.p<{ size: number }>`
  ${({ size }) =>
    css`
      grid-column: span ${size} / span ${size};
    `}
`
