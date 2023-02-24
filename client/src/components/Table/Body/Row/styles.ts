import styled, { css } from 'styled-components'

export const Container = styled.div<{ rowType: 'primary' | 'secondary' }>`
  position: relative;

  ${({ rowType }) =>
    rowType === 'secondary' &&
    css`
      background-color: #f7f9fb;

      &:nth-child(even) {
        background-color: #f2f3f4;
      }
    `}
`

export const RowContainer = styled.div<{ rowType: 'primary' | 'secondary' }>`
  display: grid;
  grid-template-columns: repeat(15, minmax(0, 1fr));
  grid-column-gap: 1rem;
  align-items: center;
  padding: 0.6rem 0.938rem;
  font-size: 0.75rem;

  ${({ rowType }) =>
    rowType === 'primary' &&
    css`
      border: 1px solid #00000017;

      & :first-child {
        font-size: 1rem;
      }
    `}
`

export const RowItem = styled.p<{ size: number }>`
  ${({ size }) =>
    css`
      grid-column: span ${size} / span ${size};
    `}
`

export const ClickableItem = styled(RowItem)`
  cursor: pointer;
`

export const ActionsWrapper = styled.div`
  grid-column-end: 16;
  display: flex;
  justify-content: end;
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

export const InnerTableWrapper = styled.div`
  border: 1px solid #0000002e;
`
