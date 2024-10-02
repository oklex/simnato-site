import { relative } from "path";
import { RegistrationNav } from "../components/RegistrationNav";
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
