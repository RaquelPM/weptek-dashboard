import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme, square }) =>
    square ? '#7A7A7A' : theme.colors.dark};

  width: ${({ square }) => (square ? 'calc(100vw - 72px);' : '120px')};
  max-width: 100%;
  height: ${({ square }) => (square ? '170px' : '120px')};
  border: ${({ square }) => (square ? '2px dashed #BBBBBB' : '')};
  border-radius: ${({ square }) => (square ? '5px' : '100px')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};

  input[type='file'] {
    display: none;
  }

  > .label_in {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  > .label {
    text-align: center;
    margin-top: 10px;
    width: 50px;
    color: white;
  }

  > .icon {
    color: white;
  }

  .image_perfil {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    border-radius: ${({ square }) => (square ? '5px' : '100px')};
  }
`
