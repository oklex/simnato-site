import { NavThemeProvider } from '@context/navTheme';
import { Navigation } from '@src/components/Navigation';
import '../index.css';

function MyApp({ Component, pageProps }) {
	return (
		<div style={{ position: 'relative' }}>
			<NavThemeProvider>
				<Component {...pageProps} />
			</NavThemeProvider>
		</div>
	);
}

export default MyApp;
