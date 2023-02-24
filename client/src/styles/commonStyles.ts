import styled, { css } from 'styled-components'

export const NoContentMessage = styled.p`
  text-align: center;
  margin: 1.5rem 0;
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

export const RelativeBox = styled.div`
  position: relative;
`
