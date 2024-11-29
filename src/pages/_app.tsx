import { NavThemeProvider } from '@context/navTheme';
import { Navigation } from '@src/components/Navigation';
import '../index.css';

function MyApp({ Component, pageProps }) {
	return (
		<div style={{ position: 'relative' }}>
			<div id="portal-root" />
			<div id="fullscreen-modal-root" />
			<NavThemeProvider>
				<Navigation />
				<div id="navigation-modal-root" />
				<Component {...pageProps} />
			</NavThemeProvider>
		</div>
	);
}

export default MyApp;
