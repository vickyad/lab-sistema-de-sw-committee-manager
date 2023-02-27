import styled, { css } from 'styled-components'

export const DefaultButton = styled.button<{
  fontSize: 'default' | 'large'
}>`
  color: white;
  border-radius: 0.5rem;
  border: 1px solid #00000026;
  font-weight: 500;
  padding: 0.3rem 0.625rem;
  font-size: 0.875rem;
  font-size: ${({ fontSize }) =>
    fontSize === 'default' ? '0.875rem' : '1.25rem'};
  background-color: #8fc1e3;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #9dbce6;
  }

  & svg {
    margin-right: 0.5rem;
    fill: white;
  }
`

export const SecondaryButton = styled(DefaultButton)`
  color: black;
  background-color: #d5e8f4;

  &:hover {
    background-color: #e0eaf7;
  }
`

export const AttentionButton = styled(DefaultButton)<{ noBorder: boolean }>`
  background-color: #dd7070;

  &:hover {
    background-color: #e19282;
  }

  ${({ noBorder }) =>
    noBorder &&
    css`
      border: none;
      border-radius: 0;
    `}
`

export const SaveButton = styled(DefaultButton)`
  background-color: #82b276;

  &:hover {
    background-color: #a1bc87;
  }
`

export const CardButton = styled(DefaultButton)`
  padding: 3.75rem 3rem;
  font-size: 1.875rem;
`

export const SubsectionButton = styled(DefaultButton)`
  background-color: #b9d8ed;
  border: 1px solid #00000017;
  text-align: left;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  border-radius: 0;
  color: black;

  & svg {
    fill: black;
  }
`

export const TransparentButton = styled.button<{
  color: string | undefined
  svgStroke: boolean
}>`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${({ color }) => color ?? '#5085a5'};
  border: none;
  font-weight: 600;
  padding: 0.5rem;
  text-align: left;
  cursor: pointer;

  & svg {
    margin-right: 0.5rem;

    ${({ svgStroke, color }) =>
      svgStroke
        ? css`
            stroke: ${color ?? '#5085a5'};
          `
        : css`
            fill: ${color ?? '#5085a5'};
          `}
  }

  &:hover {
    color: #8fc1e3;

    & svg {
      ${({ svgStroke }) =>
        svgStroke
          ? css`
              stroke: #8fc1e3;
            `
          : css`
              fill: #8fc1e3;
            `}
    }
  }
`
