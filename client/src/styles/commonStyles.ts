import styled, { css } from 'styled-components'

export const NoContentMessage = styled.p`
  text-align: center;
  margin-top: 2rem;
`

export const MainContainer = styled.div<{ displayingPopup: boolean }>`
  ${({ displayingPopup }) =>
    displayingPopup &&
    css`
      filter: blur(5px);
    `}
`

export const FontBold = styled.span`
  font-weight: 600;
`
