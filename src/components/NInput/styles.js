import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > .input {
    padding: 0 14px;

    width: ${({ width }) => (width ? `` : 'calc(100vw - 36px')});
    max-width: 380px;
    min-height: 50px;
    border: 1px solid
      ${({ theme, error, errorOutline, light }) => {
        if (error || errorOutline) {
          return '#FA6C6C'
        }

        return light ? 'white' : theme.colors.dark
      }};
    border-radius: 10px;
    background: ${({ theme, light }) => (light ? 'white' : theme.colors.dark)};

    color: ${({ theme, error, errorOutline, light }) => {
      if (error || errorOutline) {
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

  > .error {
    ${({ error }) => error && 'margin: 3px 0;'}

    height: ${({ error }) => (error ? '10px' : 0)};

    color: ${({ theme }) => theme.colors.red};
    font-size: 12px;
  }
`
