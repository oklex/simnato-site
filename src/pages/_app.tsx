import { RegistrationNav } from "@slices/RegistrationNav";
import { NavThemeProvider } from "@context/navTheme";
import "../index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ position: "relative" }}>
      <NavThemeProvider>
        <RegistrationNav />
        <Component {...pageProps} />
      </NavThemeProvider>
    </div>
  );
}

export default MyApp;
