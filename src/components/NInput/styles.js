import styled from 'styled-components'

export const Container = styled.input`
  padding: 0 14px;

  width: calc(100vw - 36px);
  max-width: 380px;
  min-height: 50px;
  border-radius: 10px;
  background: ${({ theme, light }) => (light ? 'white' : theme.colors.dark)};

  &::placeholder {
    color: ${({ theme, light }) => (light ? theme.colors.dark : 'white')};
    font-size: 15px;
  }
`
