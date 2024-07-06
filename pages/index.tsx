import { motion } from 'framer-motion';
import styled from 'styled-components';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';

import AnimatedHeading from '@/components/AnimatedHeading';
import Categories from '@/components/Categories';
import Layout from '@/components/Layout';
import { SubHeadingVariant } from '@/styles/common';
import { device } from '@/styles/globalStyle';

export default function Home() {
	const t = useTranslations('Home');

	return (
		<Layout sectionAnimation={false}>
			<HeadingWrapper>
				<AnimatedHeading aria-label='Nick' heading={'Nick'} />
				<AnimatedHeading aria-label='Lee' heading={'Lee'} />
			</HeadingWrapper>
			<SubHeadingWrapper>
				<SubHeading variants={SubHeadingVariant} initial='initial' animate='animate'>
					{t('subheading')}
				</SubHeading>
			</SubHeadingWrapper>
			<Categories />
		</Layout>
	);
}

export const getStaticProps = (async (context) => {
	return {
		props: {
			messages: (await import(`public/locales/${context.locale}.json`)).default,
		},
	};
}) satisfies GetStaticProps;

const HeadingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5rem;

	@media ${device.laptop} {
		margin: auto 0;
		padding-bottom: 10rem;
	}
`;

const SubHeadingWrapper = styled.div`
	width: 100%;
	height: fit-content;
	overflow: hidden;

	@media ${device.tablet} {
		width: 450px;
	}
	@media ${device.laptop} {
		position: absolute;
		bottom: 0;
	}
`;

const SubHeading = styled(motion.h2)`
	font-size: 1.5rem;

	@media ${device.laptop} {
		font-size: 2rem;
	}
`;
