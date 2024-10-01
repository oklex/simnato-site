import React from "react";
import GoldBrandLogo from "./assets/goldLogo";
import TextLogo from "./assets/textLogo";
import { HomepageHero } from "./components/homepageHero";

// Define the App component with React.FC
const App: React.FC = () => (
  <div id="app">
    <HomepageHero />
  </div>
);

export default App;
