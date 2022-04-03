import styled from 'styled-components'

export const Container = styled.form`
  margin: 0 auto;
  padding: 40px 18px;

  width: 100%;
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

  > .button {
    margin: 22px 0 0;
  }
`

export const Preview = styled.div`
  margin: 18px 0;

  width: min(100vw - 36px, 380px);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .preview-title {
    font-size: 20px;

    margin: 0 0 5px;
  }

  .color {
    width: 50px;
    height: ${({ chosenColor }) => (chosenColor ? '50px' : 0)};
    border-radius: 10px;
    background: ${({ chosenColor }) => chosenColor};

    align-self: center;
  }
`
