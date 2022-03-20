import styled from 'styled-components'

export const Container = styled.div`
  > .icon,
  .icon_sid {
    color: white;
  }
`

export const ContainerTop = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px 0;
  position: relative;
  overflow: hidden;

  .title {
    color: white !important;
    font-size: 24px;
    font-weight: 300;
    font-style: italic;
    background: transparent;
    width: 90px;
    margin-right: 10px;
    border: none;
  }
  .icon {
    color: white;
  }
  .icon_sid {
    position: absolute;
    left: 20px;
  }

  @media only screen and (min-width: 800px) {
    height: 0px;
    padding: 0;
  }
`

export const Sidbar = styled.div`
  position: fixed;
  padding-top: 100px;
  padding-left: ${({ close }) => (close ? '20px' : '0px')};
  top: 0px;
  left: 0px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  width: ${({ close }) => (close ? '210px' : '0px')};
  overflow: hidden;

  z-index: 100;

  .option {
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 800px) {
    width: 210px !important;
    padding-left: 20px;
    .title_div {
      width: 100% !important;
      padding-right: 60px;
    }
  }

  .title {
    color: white !important;
    font-size: 24px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
    background: transparent;
    border: none;
  }

  .title_div {
    display: flex;

    justify-content: center;
    align-items: center;

    position: absolute;
    top: 20px;
    width: 0px;
    overflow: hidden;

    .icon {
      color: white;
      position: absolute;
      right: 55px;
    }
  }
`

export const SidebarItem = styled.div`
  height: ${({ close }) => (close ? '120px' : '0px')};
  overflow: hidden;
`

export const Sombra = styled.div`
  width: ${({ close }) => (close ? '100vw' : '0px')};
  height: 100%;
  min-height: 100vh;

  transition: all 0s !important;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 90;

  background: black;

  opacity: 0.3;
`
