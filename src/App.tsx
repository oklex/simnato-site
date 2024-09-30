import React from 'react';
import Section from './ui-library/Section';

// Define the App component with React.FC
const App: React.FC = () => (
	<div id="app">
		<Section mode="light" gradient="vertical">
			<h1>Light Mode with Vertical Gradient</h1>
			<p>This section has a vertical gradient background.</p>
		</Section>

		<Section mode="dark" gradient="horizontal">
			<h1>Dark Mode with Horizontal Gradient</h1>
			<p>This section has a horizontal gradient background.</p>
		</Section>

		<Section mode="gold">
			<h1>Gold Mode without Gradient</h1>
			<p>This section has a solid background color.</p>
		</Section>
	</div>
);

export default App;
