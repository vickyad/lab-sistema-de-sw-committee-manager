import styled, { css } from 'styled-components'

export const Container = styled.div<{ type: 'primary' | 'secondary' }>`
  display: grid;
  grid-template-columns: repeat(15, minmax(0, 1fr));
  grid-column-gap: 1rem;
  text-transform: uppercase;
  padding: 0.625rem 0.938rem;
  font-weight: 600;

  ${({ type }) =>
    css`
      font-size: ${type === 'primary' ? '0.875rem' : '0.75rem'};
      color: ${type === 'primary' ? 'white' : 'black'};
      background-color: ${type === 'primary' ? '#31708e' : '#D5E8F4'};
      ${type === 'primary' && 'border-radius: 0.5rem 0.5rem 0 0'};
    `}
`

export const ColumnHeader = styled.h3<{ size: number }>`
  ${({ size }) =>
    css`
      grid-column: span ${size} / span ${size};
    `}
`
