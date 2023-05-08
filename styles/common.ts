import styled from 'styled-components';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

import { device } from './globalStyle';

// Variants (framer-motion)

export const SectionVariant = {
    initial: { opacity: 0, x: -200, y: 0 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
};

export const SubHeadingVariant = {
    initial: { opacity: 0, y: 400 },
    animate: { opacity: 1, y: 0, transition: { ease: 'easeInOut', delay: 2, duration: 1 } },
};

export const LinkVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 2.5, duration: 1 } },
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
        padding: 1.5rem;
    }
`;

// Photos Pages

export const Heading = styled.h1`
    margin: 0;
    font-size: 5rem;
    line-height: 0.75;

    @media ${device.tablet} {
        font-size: 8rem;
    }
`;

export const SubHeading = styled(motion.h2)`
    width: 100%;
    font-size: 1.5rem;

    @media ${device.tablet} {
        width: 450px;
    }
`;

export const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 350px;
`;

export const Link = styled(NextLink)`
    color: ${({ theme }) => theme.offBlack};
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
`;
