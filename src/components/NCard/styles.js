import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: ${({ open, titleSize }) =>
    open ? '100vh' : titleSize ? `${titleSize}px` : '46px'};
  background: white;
  border-radius: 20px;

  padding: 13px 20px 16px 20px;

  transition: all 0.7s;

  @media only screen and (min-width: 600px) {
    max-height: ${({ open }) => (open ? '100vh' : '46px')};
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

export const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 15px;

  p {
    font-weight: 700;
  }

  .icon {
    color: ${({ theme }) => theme.colors.primary};
    width: 30px;
    cursor: pointer;
  }
`
export const Content = styled.div`
  width: 100%;
  max-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
`
