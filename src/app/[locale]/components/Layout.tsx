import { ReactNode } from 'react';

import { Section, SectionVariant } from '@/styles/common';
import Navbar from './Navbar';

interface Props {
	children: ReactNode;
	sectionAnimation?: boolean;
}

const Layout = ({ children, sectionAnimation = true }: Props) => {
	return (
		<>
			<Navbar />
			<Section
				variants={sectionAnimation ? SectionVariant : {}}
				initial='initial'
				animate='animate'
				exit='exit'
				transition={{ type: 'linear' }}
			>
				{children}
			</Section>
		</>
	);
};

export default Layout;
