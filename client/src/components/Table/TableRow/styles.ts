import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const RowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(15, minmax(0, 1fr));
  grid-column-gap: 1rem;
  align-items: center;
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

export const ActionsWrapper = styled.div`
  grid-column-start: -2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const VerticalLine = styled.div`
  min-width: 1px;
  height: 1.5rem;
  background-color: #00000033;
`

export const TransparentButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
