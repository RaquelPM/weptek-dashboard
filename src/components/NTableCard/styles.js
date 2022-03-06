import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;
  max-height: 40vh;

  border-radius: 20px;

  padding: 20px 20px 0px 20px;

  .icon {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media only screen and (min-width: 700px) {
    padding: 35px 20px 25px 20px;
  }
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  p {
    font-size: 12px;
  }
  height: 0px;

  .div_name {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    gap: 10px;
  }

  @media only screen and (min-width: 700px) {
    padding-bottom: 20px;
    border-bottom: 1px solid #d2d2d2;
    height: 100%;
    p {
      font-size: 13px;
    }
  }

  @media only screen and (min-width: 1000px) {
    p {
      font-size: 18px;
    }
  }
`

export const ContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: 0px;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 25%;

    gap: 10px;

    font-size: 15px;
    .label {
      font-size: 15px;
    }
  }

  @media only screen and (min-width: 700px) {
    padding: 20px 0 20px 0;
    height: 100%;
    .item {
      font-size: 15px;
      .label {
        font-size: 15px;
      }
    }
  }

  @media only screen and (min-width: 1000px) {
    .item {
      font-size: 20px;
      .label {
        font-size: 20px;
      }
    }
  }
`

export const LabelItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 10px 0 10px 0;
  width: 100%;
  overflow: hidden;

  .border {
    height: 1px;
    width: 100px;
    background: #d2d2d2;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    gap: 10px;
  }

  p {
    font-size: 14px;
  }

  @media only screen and (min-width: 500px) {
    p {
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 700px) {
    height: 0px;
    padding: 0px;
  }
`

export const Scroll = styled.div`
  overflow-y: auto;
`
