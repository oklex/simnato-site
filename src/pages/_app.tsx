import { RegistrationNav } from "@slices/RegistrationNav";
import { NavThemeProvider } from "@context/navTheme";
import { Navigation } from "@src/components/Navigation";
import "../index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ position: "relative" }}>
      <NavThemeProvider>
        {/* <RegistrationNav /> */}
        <Navigation/>
        <Component {...pageProps} />
      </NavThemeProvider>
    </div>
  );
}

export default MyApp;
