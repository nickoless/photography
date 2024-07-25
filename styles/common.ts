import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Link as NextLink } from '@/src/navigation';
import { device } from './globalStyle';

// Variants (framer-motion)

export const SectionVariant = {
	initial: { opacity: 0, x: -200, y: 0 },
	animate: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 },
};

export const SubHeadingVariant = {
	initial: { opacity: 0, x: -400 },
	animate: {
		opacity: 1,
		x: 0,
		transition: { ease: 'easeInOut', delay: 1.5, duration: 1 },
	},
};

export const LinkVariant = {
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { delay: 2, duration: 0.75 } },
};

export const BannerVariant = {
	animate: {
		transition: { delayChildren: 0.5, staggerChildren: 0.1 },
	},
};

export const LetterVariant = {
	initial: { y: 400 },
	animate: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1,
		},
	},
};

// General

export const Section = styled(motion.section)`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	position: relative;
	height: calc(100vh - 80px);
	width: 100%;
	max-width: 1900px;
	margin: auto;
	padding: 1rem;

	@media ${device.tablet} {
		padding: 0 1.5rem 1.5rem 1.5rem;
	}
`;

// Photos Pages

export const Heading = styled.h1`
	margin: 0;
	font-size: 5rem;
	line-height: 0.75;

	@media ${device.tablet} {
		font-size: 6rem;
	}
	@media ${device.laptop} {
		font-size: 8rem;
	}
`;

export const SubHeading = styled(motion.h2)`
	width: 100%;
	font-size: 1.5rem;

	@media ${device.tablet} {
		width: 575px;
		margin-top: 1rem;
		margin-bottom: 2rem;
		font-size: 1.75rem;
	}
	@media ${device.laptop} {
		font-size: 2rem;
	}
`;

export const HeadingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 2rem;
	margin-bottom: 3rem;

	@media ${device.laptop} {
		margin-top: 4rem;
		margin-bottom: 4rem;
	}
`;

export const Link = styled(NextLink)`
	position: relative;
	display: inline-block;
	width: fit-content;
	color: ${({ theme }) => theme.offBlack};
	font-size: 1rem;
	font-weight: 600;
	text-decoration: none;
	text-transform: uppercase;

	:hover {
		border-bottom: 2px solid ${({ theme }) => theme.offBlack};
		margin-bottom: -2px;
	}

	@media ${device.tablet} {
		font-size: 1.25rem;
	}
	@media ${device.laptop} {
		font-size: 1.5rem;
	}
`;
