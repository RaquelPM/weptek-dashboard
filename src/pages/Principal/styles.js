import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
`

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`

export const ContainerTax = styled.div`
  display: flex;
  width: 100%;
  background: white;
  border-radius: 10px;
  padding: 10px 0 10px 0;
  > .border {
    border-left: 1px solid #d2d2d2;
  }
  .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0 20px 0;
    gap: 5px;
    width: 33%;
    p,
    input {
      font-size: 15px;
    }
    input {
      border: none;
      width: 42px;
    }

    @media only screen and (min-width: 900px) {
      flex-direction: row;
      p,
      input {
        font-size: 18px;
      }
    }
  }
`
