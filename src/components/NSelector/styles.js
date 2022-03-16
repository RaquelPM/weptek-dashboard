import styled from 'styled-components'

export const OptionsList = styled.div`
  padding: ${({ open }) =>
    open ? '25px 20px 20px 25px' : `0px 20px 0px 25px`};
  display: flex;
  position: absolute;
  z-index: ${({ open }) => (open ? '20' : '10')};
  top: 38px;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: ${({ open }) => (open ? '200px' : `0px`)};
  overflow: ${({ open }) => (open ? 'auto' : `hidden`)};

  border-width: 0;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background: #313131;
  color: white;

  .option {
    min-width: 100%;
    min-height: 30px;
    display: flex;
    justify-items: start;
    margin-top: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;

    color: #ffffff;
  }
`

export const Container = styled.div`
  position: relative;

  display: flex;

  flex-direction: column;
  width: 100%;
  opacity: ${({ disabled }) => (disabled ? '0.8' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  .label {
    margin: 0 0 3px 16px;

    color: ${({ theme }) => theme.colors.dark};
  }

  .error {
    margin: 3px 0 0 16px;

    height: ${({ error }) => (error ? '10px' : 0)};

    color: ${({ theme }) => theme.colors.red};
    font-size: 12px;
  }
`

export const Selected = styled.div`
  padding: 0 25px;
  display: flex;
  z-index: ${({ open }) => (open ? '21' : '11')};
  align-items: center;
  position: relative;

  width: 100%;
  height: 50px;
  border: 1px solid
    ${({ theme, error }) => (error ? '#FA6C6C' : theme.colors.dark)};
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.dark};
  color: white;

  .option {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    opacity: 0.7;

    color: white;
    opacity: ${({ selected }) => (selected ? 1 : 0.7)};

    transition: opacity 0s;
  }
  .icon {
    position: absolute;
    right: 20px;
    transform: ${({ open }) => (open ? 'rotate(180deg)' : ``)};
    top: 30%;
  }
`
