import React, { ReactElement } from 'react';
import Section from '../ui-library/Section';
import GoldBrandLogo from '../assets/goldLogo';
import Header from '../ui-library/Header';
import Spacer from '../ui-library/Spacer';

export const HomepageHero = (): ReactElement => {
	return (
		<div id="homepage-hero">
			<Section center height="90vh" mode="dark" gradient="vertical">
				<Spacer height={'30vh'} />
				<GoldBrandLogo scale="18rem" center padding="25px 25px 25px" />
				<Header level={1} sizeRemOverride={6.3} mode="gold" center bold>
					Simulation NATO
				</Header>
				<Header margin='-15px 0 auto' level={6} sizeRemOverride={2.3} mode="light" center>
					Model UN Crisis Conference
				</Header>
			</Section>
		</div>
	);
};


