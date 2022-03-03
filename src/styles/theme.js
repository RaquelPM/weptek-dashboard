import { css } from 'styled-components'

const theme = {
  colors: {
    primary: '#944BBB',
    dark: '#4D4D4D',
    gray: '#C4C4C4',
    light_gray: '#E5E5E5',
    red: '#FF3131',
  },
  styles: {
    cardWidth: css`
      width: calc(100vw - 48px);
      max-width: 544px;
    `,
    itemWidth: css`
      width: calc(100vw - 72px);
      max-width: 520px;
    `,
  },
}

export default theme
