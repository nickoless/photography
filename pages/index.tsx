import { motion } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';

import AnimatedHeading from '@/components/AnimatedHeading';
import Categories from '@/components/Categories';
import Layout from '@/components/Layout';
import { SubHeadingVariant } from '@/styles/common';
import { device } from '@/styles/globalStyle';

export default function Home() {
    return (
        <Layout sectionAnimation={false}>
            <HeadingWrapper>
                <AnimatedHeading heading={'Nick'} />
                <AnimatedHeading heading={'Lee'} />
            </HeadingWrapper>
            <SubHeadingWrapper>
                <SubHeading variants={SubHeadingVariant} initial='initial' animate='animate'>
                    Hobbyist photographer. A collection of my favourite shots.
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
