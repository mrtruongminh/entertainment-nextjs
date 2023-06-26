import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      red: string;
      darkBlue: string;
      greyishBlue: string;
      semiDarkBlue: string;
    };
    typography: {
      fontSizes: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      fontWeights: {
        light: number;
        medium: number;
      };
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
