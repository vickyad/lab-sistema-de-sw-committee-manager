import styled from 'styled-components'

export const Label = styled.p`
  overflow: hidden;
  white-space: nowrap;
`

export const LabelContainer = styled.button`
  background-color: transparent;
  border: 1px solid #00000033;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  padding: 0.3rem 0.5rem;
  margin: 0 auto;
  width: 85%;

  & svg {
    margin-left: 0.5rem;
  }
`

export const Container = styled.div`
  position: absolute;
  right: 2rem;
  top: 2.25rem;

  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #00000033;
  z-index: 5;
`

export const TransparentButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  text-align: left;
  font-weight: 500;
  display: flex;
`
