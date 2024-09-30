import React from "react";
import Section from "./ui-library/Section";
import Header from "./ui-library/Header";
import Text from "./ui-library/Text";
import StyledText from "./ui-library/StyledText";
import GoldBrandLogo from "./assets/goldLogo";
import TextLogo from "./assets/textLogo";

// Define the App component with React.FC
const App: React.FC = () => (
  <div id="app">
    <Section mode="light" gradient="horizontal">
      <TextLogo height={"35px"} />
      <Header level={1} mode="dark">
        Light Mode with <StyledText bold>Horizontal Gradient</StyledText>
      </Header>
      <Text>This section has a vertical gradient background.</Text>
    </Section>

    <Section mode="dark" gradient="vertical">
      <GoldBrandLogo scale="300px" center padding="150px 0px 50px" />
      <Header level={1} mode="light">
        Dark Mode with <StyledText bold>Vertical Gradient</StyledText>
      </Header>
      <Text mode="light">
        This section has a horizontal gradient background.
      </Text>
    </Section>

    <Section mode="gold">
      <Header level={1} mode="dark">
        Gold Mode <StyledText bold>without Gradient</StyledText>
      </Header>
      <Text>This section has a solid background color.</Text>
    </Section>
  </div>
);

export default App;
