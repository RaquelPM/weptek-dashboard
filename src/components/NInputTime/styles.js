import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 0 14px;
    max-width: 100px;
    height: 50px;
    border: 1px solid
      ${({ theme, error, light }) => {
        if (error) {
          return '#FA6C6C'
        }

        return light ? 'white' : theme.colors.dark
      }};
    border-radius: 20px;
    background: ${({ theme, light }) => (light ? 'white' : theme.colors.dark)};

    color: ${({ theme, error, light }) => {
      if (error) {
        return '#FA6C6C'
      }

      return light ? theme.colors.dark : 'white'
    }};

    &::placeholder {
      opacity: 0.7;

      color: ${({ theme, light }) => (light ? theme.colors.dark : 'white')};
      font-size: 15px;
    }

    &:disabled {
      opacity: 0.8;
    }
  }
`
