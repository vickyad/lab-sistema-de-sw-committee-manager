import styled, { css } from 'styled-components'

export const DefaultButton = styled.button<{ fontSize: 'default' | 'large' }>`
  color: white;
  border-radius: 0.5rem;
  border: 1px solid #00000026;
  font-weight: 500;
  padding: 0.3rem 0.625rem;
  font-size: 0.875rem;
  cursor: pointer;
  background-color: #8fc1e3;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #9dbce6;
  }

  & svg {
    margin-right: 0.5rem;
  }

  ${({ fontSize }) =>
    css`
      font-size: ${fontSize === 'default' ? '0.875rem' : '1.25rem'};
    `}
`

export const SecondaryButton = styled(DefaultButton)`
  color: black;
  background-color: #d5e8f4;

  &:hover {
    background-color: #e0eaf7;
  }
`

export const AttentionButton = styled(DefaultButton)`
  background-color: #dd7070;

  &:hover {
    background-color: #e19282;
  }
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

export const TransparentButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: #5085a5;
  border: none;
  font-weight: 600;
  cursor: pointer;

  & svg {
    margin-right: 0.5rem;
    fill: #5085a5;
  }

  &:hover {
    color: #8fc1e3;

    & svg {
      fill: #8fc1e3;
    }
  }
`
