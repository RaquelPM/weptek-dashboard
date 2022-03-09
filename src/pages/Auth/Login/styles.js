import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.lg} {
    flex-direction: row;
  }

  .sentence {
    max-width: 90%;

    color: white;
    font-size: 20px;
    text-align: center;

    ${({ theme }) => theme.media.md} {
      font-size: 25px;
    }

    ${({ theme }) => theme.media.lg} {
      font-size: 30px;
    }
  }

  > main {
    padding: 71px 0 calc(30vw + 30px);

    flex: 1;
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${({ theme }) => theme.media.lg} {
      padding: 0;

      width: 50%;
      height: 100vh;
    }

    > .sentence {
      ${({ theme }) => theme.media.lg} {
        display: none;
      }
    }

    > .logo {
      margin: 30px 0 18px;
    }

    > a {
      margin: 23px 0 0;

      color: white;
      font-size: 16px;
    }
  }

  > aside {
    position: relative;

    background: ${({ theme }) => theme.colors.dark};
    width: 100%;
    height: 50vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${({ theme }) => theme.media.lg} {
      width: 50%;
      height: 100vh;
    }

    > .sentence {
      display: none;

      ${({ theme }) => theme.media.lg} {
        display: block;
      }
    }

    > .image {
      position: absolute;
      bottom: 20vw;

      width: 60%;
      margin: 0 20vw;

      ${({ theme }) => theme.media.lg} {
        position: relative;
        bottom: 0;

        margin: 0;

        width: 70%;
      }
    }
  }
`
