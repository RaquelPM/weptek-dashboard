import styled from 'styled-components'

export const Container = styled.button`
  width: 252px;
  height: 41px;
  background: ${({ theme, color }) =>
    !color
      ? theme.colors.primary
      : color === 'red'
      ? theme.colors.red
      : color === 'green'
      ? theme.colors.green
      : theme.colors.gray};

  border: 1px solid
    ${({ theme, outline, color }) =>
      !color ? (outline ? 'white' : theme.colors.primary) : 'none'};

  border-radius: ${({ color }) => (!color ? '25px' : '10px')};

  box-shadow: ${({ color }) =>
    !color ? '0px 4px 4px rgba(0, 0, 0, 0.25);' : ''};

  .label {
    color: ${({ color }) => (color === 'gray' ? '' : 'white')};
    font-size: 15px;
  }
`
