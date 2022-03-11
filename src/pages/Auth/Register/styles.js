import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: stretch;

  > aside {
    padding: 40px 0;

    width: 50%;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.primary};

    display: none;

    ${({ theme }) => theme.media.lg} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    > .sentence {
      max-width: 90%;

      color: white;
      font-size: 30px;
      text-align: center;
    }

    > .image {
      width: 60%;
    }
  }

  > main {
    padding: 40px 0;

    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${({ theme }) => theme.media.lg} {
      width: 50%;
    }

    p {
      max-width: min(100vw - 36px, 380px);
    }

    > .image {
      margin: 0 0 12px;

      width: 100px;

      ${({ theme }) => theme.media.lg} {
        display: none;
      }
    }

    > .title {
      font-size: 25px;
      text-align: center;

      ${({ theme }) => theme.media.md} {
        font-size: 26px;
      }

      ${({ theme }) => theme.media.lg} {
        font-size: 27px;
      }
    }

    > .instruction {
      margin: 22px 0;

      text-align: center;
    }
  }
`
