import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;

  padding-bottom: 10px;

  .btns {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;

    button {
      width: 200px;
    }
    @media only screen and (min-width: 700px) {
      flex-direction: row;
    }
  }

  gap: 8px;
  .input_div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 3px;

    p {
      padding-left: 20px;
    }

    input {
      width: 100% !important;
      border-radius: 20px;
    }
  }

  .div_time {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    padding-top: 10px;

    .input_time_div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .div_infos {
    display: flex;
    align-items: center;
    flex-direction: column;

    > .icon {
      padding-top: 15px;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 1000px) {
    gap: 30px;
    .div_infos {
      flex-direction: row;
      gap: 30px;
    }

    .input_div,
    .div_time {
      flex-direction: row;
      align-items: center;
      gap: 22px;
      p {
        padding-left: 0px;
      }
    }

    .div_time {
      padding-left: 5%;
    }

    padding: 0 48px 0 48px;
  }
`
