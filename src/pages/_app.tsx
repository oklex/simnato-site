import { NavThemeProvider } from '@context/navTheme';
import { Navigation } from '@src/components/Navigation';
import '../index.css';

function MyApp({ Component, pageProps }) {
	return (
		<div style={{ position: 'relative' }}>
			<div id="portal-root" />
			<NavThemeProvider>
				<Navigation />
				<Component {...pageProps} />
			</NavThemeProvider>
		</div>
	);
}

export default MyApp;
