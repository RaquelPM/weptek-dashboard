import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => theme.styles.itemWidth}
  color: ${({ theme }) => theme.colors.gray};

  height: 50px;
  max-width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 0.86386px 3.45544px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  .icon {
    position: absolute;
    top: 30%;
    left: 20px;
  }

  .icon_plus {
    position: absolute;
    top: 30%;
    right: 20px;
  }

  .input {
    padding: 0px 0px 0px 60px;

    width: 100%;
    height: 69px;
    border-width: 0;
    border-radius: 20px;
    background: white;

    color: ${({ theme }) => theme.colors.gray};

    &::placeholder {
      opacity: 0.7;
    }
  }
`
