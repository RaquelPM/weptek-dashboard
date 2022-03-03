import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray};
  padding-right: 80px;
  @media only screen and (min-width: 800px) {
    padding-left: 290px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-left: 40px;
  @media only screen and (min-width: 800px) {
    margin-left: 0px;
  }
`

export const Title = styled.div`
  .title {
    font-size: 32px;
    line-height: 20px;
  }
  padding-bottom: 5px;
  border-bottom: 1px solid white;

  margin-top: 80px;
  margin-bottom: 40px;
  width: 90%;

  margin-left: 40px;
  @media only screen and (min-width: 800px) {
    margin-left: 0px;
  }
`
