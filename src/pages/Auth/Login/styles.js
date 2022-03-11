import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;

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
    background: ${({ theme }) => theme.colors.primary};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${({ theme }) => theme.media.lg} {
      padding: 40px 0;

      width: 50%;
    }

    > .sentence {
      margin: 0 0 30px;

      ${({ theme }) => theme.media.lg} {
        display: none;
      }
    }

    > .logo {
      margin: 0 0 18px;
    }

    > a {
      margin: 23px 0 0;

      color: white;
      font-size: 16px;
    }
  }

  > aside {
    position: relative;

    min-height: 50vw;
    background: ${({ theme }) => theme.colors.dark};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${({ theme }) => theme.media.lg} {
      padding: 40px 0;

      width: 50%;
      min-height: initial;
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
