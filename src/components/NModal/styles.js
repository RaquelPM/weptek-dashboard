import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ visible }) => (visible ? 100 : -30)};
  overflow-y: hidden;

  padding: 0 24px;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);

  opacity: ${({ visible }) => (visible ? 1 : 0)};

  display: flex;
  align-items: center;
  justify-content: center;

  .body {
    overflow: hidden;

    width: 90%;
    max-width: 544px;
    border-radius: 20px;
    background: white;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ visible }) => !visible && 'transform: translateY(100%);'}
  }
`
