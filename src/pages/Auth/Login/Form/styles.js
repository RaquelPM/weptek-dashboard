import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;

  > .input {
    padding: 0 14px;

    width: calc(100% - 36px);
    max-width: 380px;
    min-height: 50px;
    border-radius: 10px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.dark};
      font-size: 15px;
    }
  }

  > .button {
    margin: 5px 0 0;
  }
`
