import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  gap: 10px;
  width: 100%;
  padding: 0 5% 20px 5%;

  input {
    max-width: 100% !important;
  }

  @media only screen and (min-width: 900px) {
    padding: 0 20% 20px 20%;
  }

  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;

    button {
      width: 200px;
    }
    @media only screen and (min-width: 700px) {
      flex-direction: row;
    }
  }
`
