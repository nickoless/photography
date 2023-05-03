import styled from "styled-components";

import Layout from "@/components/Layout";

import { Section } from "@/styles/common";

export default function Home() {
    return (
        <Layout>
            <Section>
                <HeadingWrapper>
                    <Heading>Contact</Heading>
                </HeadingWrapper>
            </Section>
        </Layout>
    );
}

const Heading = styled.h1`
    margin: 0;
    font-size: 14rem;
    line-height: 0.75;
`;

const SubHeading = styled.h2`
    position: absolute;
    bottom: 1rem;
    margin-bottom: 0;
    margin-left: 1rem;
    width: 450px;
    font-size: 1.5rem;
`;

const HeadingWrapper = styled.div`
    display: flex;
    align-self: center;
`;
