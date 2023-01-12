import styled, { css } from 'styled-components'

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 6.875rem;
  background-color: #5085a5;
`

export const Link = styled.a<{ selected: boolean }>`
  background-color: transparent;
  ${({ selected }) =>
    selected &&
    css`
      background-color: #ffffff33;
    `}
`
