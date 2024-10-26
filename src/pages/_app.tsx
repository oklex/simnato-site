import { RegistrationNav } from "../slices/RegistrationNav";
import "../index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ position: "relative" }}>
      <RegistrationNav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
