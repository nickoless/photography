import { motion } from 'framer-motion';
import styled from 'styled-components';

import { BannerVariant, LetterVariant } from '@/styles/common';
import { device } from '@/styles/globalStyle';

interface Props {
    heading: string;
}

const AnimatedHeading = ({ heading }: Props) => (
    <MainHeading variants={BannerVariant} initial={'initial'} animate='animate'>
        {[...heading].map((letter, index) => (
            <Letter key={`letter-${index}`} variants={LetterVariant}>
                {letter}
            </Letter>
        ))}
    </MainHeading>
);
export default AnimatedHeading;

const Letter = styled(motion.span)`
    display: inline-block;
`;

const MainHeading = styled(motion.h1)`
    margin: 0;
    height: 100px;
    font-size: 8rem;
    line-height: 0.75;
    overflow: hidden;

    @media ${device.tablet} {
        font-size: 12rem;
        height: 150px;
    }
    @media ${device.laptop} {
        font-size: 14rem;
        height: 175px;
    }
`;
