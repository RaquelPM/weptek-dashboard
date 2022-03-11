import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .div_top {
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 16px;

    button {
      width: 100px;
    }

    @media only screen and (min-width: 900px) {
      padding: 0 15% 0 15%;
      flex-direction: row;
      button {
        width: 200px;
      }
    }
  }
`
