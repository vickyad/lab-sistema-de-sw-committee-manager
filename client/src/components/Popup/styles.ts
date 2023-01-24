import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f7f9fb;
  text-align: center;
  max-width: 31.25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const Header = styled.div`
  background-color: #31708e;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1.5rem 0;
`

export const Description = styled.div`
  padding: 3rem 1.5rem;
`

export const Button = styled.button`
  background-color: #c2cbd1;
  border: none;
  width: 50%;
  padding: 1.5rem 0;
  font-size: 1.125rem;
  font-weight: 600;
`

export const ActionButton = styled(Button)`
  background-color: ${(props) =>
    props.color === 'save' ? '#82b276' : '#DD7070'};
`
