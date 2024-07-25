'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import AnimatedHeading from '@/src/app/[locale]/components/AnimatedHeading';
import Categories from '@/src/app/[locale]/components/Categories';
import Layout from '@/src/app/[locale]/components/Layout';
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
