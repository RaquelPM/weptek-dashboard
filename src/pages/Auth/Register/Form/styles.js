import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 7px;

  .terms {
    margin: 22px 0;

    text-align: center;

    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
