import styled, { css } from "styled-components";

export const Container = styled.div<{displayingPopup: boolean}>`
    ${({ displayingPopup }) =>
    displayingPopup &&
    css`
          filter: blur(5px);
    `}
`