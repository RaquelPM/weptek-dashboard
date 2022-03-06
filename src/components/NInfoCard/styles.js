import styled from 'styled-components'

export const Container = styled.div`
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;

  max-width: 300px;

  padding: 15px 55px 15px 55px;

  .info {
    font-size: 25px;
    padding: 25px 0 25px 0;
  }
`

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  > .title {
    font-size: 15px;
    padding-bottom: 8px;
  }

  > .border {
    width: 150px;
    border-bottom: 1px solid #d2d2d2;
  }

  > .icon {
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 20px;
  }
`
