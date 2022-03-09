import styled from 'styled-components'

export const Container = styled.button`
  width: 252px;
  height: 41px;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid
    ${({ theme, outline }) => (outline ? 'white' : theme.colors.primary)};
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .label {
    color: white;
    font-size: 15px;
  }
`
