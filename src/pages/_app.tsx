import type { AppProps } from "next/app";
import "@fontsource-variable/outfit";
// import GlobalStyle from "@/components/GlobalStyle";
import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <GlobalStyle /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
