import styled from "styled-components";

import Layout from "@/components/Layout";
import { Section } from "@/styles/common";

export default function Home() {
    return (
        <Layout>
            <Section>
                <HeadingWrapper>
                    <Heading>Street</Heading>
                    <SubHeading>
                        Pictures of candid moments while I'm on the go.
                    </SubHeading>
                </HeadingWrapper>
            </Section>
        </Layout>
    );
}

const Heading = styled.h1`
    margin: 0;
    margin-left: 0.75rem;
    font-size: 10rem;
    line-height: 0.75;
`;

const SubHeading = styled.h2`
    margin: 1.5rem;
    width: 450px;
    font-size: 1.5rem;
`;

const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
`;
