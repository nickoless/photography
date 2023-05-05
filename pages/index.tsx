import styled from 'styled-components';

import Categories from '@/components/Categories';
import Layout from '@/components/Layout';
import { Section } from '@/styles/common';

export default function Home() {
    return (
        <Layout>
            <Section>
                <HeadingWrapper>
                    <Heading>Nick</Heading>
                    <Heading>Lee</Heading>
                </HeadingWrapper>
                <Heading></Heading>
                <SubHeading>Hobbyist photographer. A collection of my favourite shots.</SubHeading>
                <Categories />
            </Section>
        </Layout>
    );
}

const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0;
    padding-bottom: 10rem;
`;

const Heading = styled.h1`
    margin: 0;
    margin-left: -0.75rem;
    font-size: 14rem;
    line-height: 0.75;
`;

const SubHeading = styled.h2`
    position: absolute;
    bottom: 0;
    width: 450px;
    font-size: 2rem;
`;
