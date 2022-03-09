import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  > main {
    padding: 71px 0 calc(60vw - 90px);

    flex: 1;
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};

    display: flex;
    flex-direction: column;
    align-items: center;

    > .sentence {
      color: white;
      font-size: 20px;
      text-align: center;
    }

    > .logo {
      margin: 30px 0 18px;
    }

    > .input {
      margin: 16px 0 0;
      padding: 0 14px;

      width: calc(100vw - 36px);
      height: 50px;
      border-radius: 10px;
      border-width: 0;

      &::placeholder {
        color: ${({ theme }) => theme.colors.dark};
        font-size: 15px;
      }
    }
  }

  > aside {
    position: relative;

    background: ${({ theme }) => theme.colors.dark};
    width: 100%;
    height: 150px;

    > .image {
      position: absolute;
      bottom: 40px;

      width: 60%;
      margin: 0 20%;
    }
  }
`
