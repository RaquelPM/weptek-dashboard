import styled from 'styled-components'

export const Container = styled.form`
  margin: 0 auto;
  padding: 40px 18px;

  width: 100%;
  height: 100vh;
  max-width: 416px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 7px;

  p {
    max-width: min(100vw - 36px, 380px);
  }

  > .title {
    margin: 0 0 12px;

    font-size: 25px;
    text-align: center;

    ${({ theme }) => theme.media.md} {
      font-size: 26px;
    }

    ${({ theme }) => theme.media.lg} {
      font-size: 27px;
    }
  }

  > .label {
    margin: 10px 0 0 10px;

    align-self: flex-start;

    font-size: 16px;
  }

  > .instruction {
    margin: 50px 0 0 10px;
    width: 80%;

    align-self: flex-start;

    font-size: 12px;
    text-align: justify;
  }

  > .button {
    margin: 50px 0 20px;
  }
`
