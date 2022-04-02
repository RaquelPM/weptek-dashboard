import styled from 'styled-components'

import NModal from '../NModal'

export const Container = styled(NModal)`
  .body {
    padding: 26px 0 21px;

    > .title {
      max-width: 90%;
      font-size: 22px;
      text-align: center;
    }

    > .helper {
      max-width: 80%;
      font-size: 12px;
      color: #585858;
      text-align: center;
    }
  }
`

export const Form = styled.form`
  margin: 26px 0 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  > .div_input {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    input {
      width: 250px !important;
    }

    .div_input_time {
      display: flex;
      gap: 15px;
      align-items: center;
    }
  }

  > .button {
    margin-top: 10px;
  }

  @media only screen and (min-width: 600px) {
    > .div_input {
      flex-direction: row;

      .div_input_time {
        flex-direction: column;
        gap: 5px;
      }

      input {
        width: 300px !important;
      }
    }
  }
`
