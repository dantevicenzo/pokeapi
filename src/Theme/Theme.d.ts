import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      third: string,
      primary: string,
      second: string,
      danger: string,
      green: string,
      grey: string,
      pharagraph: string,
      whiteLight: string,
      redColorGradient: string,
      redGradientCard: string,
      greyGradient: string,
      blueGradient: string,
      pinkGradient: string,
      greenGradient: string,
      goldGradient: string,
      yellowGradient: string,
  },
  fontSizes: {
      h1: string,
      h2: string,
      h3: string,
      h6: string,
      paragraph: string,
      cardTitleIMg: string,
      cardTitleContainer: string,
  },
  buttonSizes: {
      big: string,
      small: string,
  },
  boxShadowStyles: {
      blur24: string,
      blur20: string,
      blur16: string,
      blur8: string,
      blurCard: string,
      filter: string,
      shadowButton: string,
  }
  }
}