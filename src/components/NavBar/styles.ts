import styled, { css } from 'styled-components'

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 6.875rem;
  background-color: #5085a5;
  padding: 2rem 0;
  `

export const LinkContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Link = styled.a<{ selected: boolean }>`
  background-color: transparent;
  width: 4.688rem;
  height: 4.688rem;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #ffffff33;
    `}
`
