import styled, { css } from 'styled-components'

export const Input = styled.input<{ size: number }>`
  background-color: transparent;
  border: 1px solid #00000033;
  border-radius: 0.3rem;
  font-size: 1rem;
  padding: 0.3rem 0.5rem;

  ${({ size }) =>
    css`
      grid-column: span ${size} / span ${size};
    `}
`
