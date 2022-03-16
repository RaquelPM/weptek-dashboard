import styled from 'styled-components'

import NModal from '../NModal'

export const Container = styled(NModal)`
  .body {
    padding: 50px 0 50px;
    gap: 15px;

    > .label {
      margin-bottom: 24px;

      max-width: 90%;

      text-align: center;
      font-size: 25px;
    }

    .confirm-button {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > .title_w {
      width: 100%;
      margin-left: 30px;
      margin-bottom: 5px;
      text-align: start !important;
    }

    > .icon_change {
      color: ${({ theme }) => theme.colors.primary};
      margin-top: 10px;
    }
  }
`

export const Wrapper = styled.div`
  ${({ theme }) => theme.styles.itemWidth}
  height: 50px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.dark};

  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    font-size: 20px;
    color: white;
  }
`
