import { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../themes/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
      duration: 1000,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
