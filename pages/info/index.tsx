import styled from 'styled-components';

import Layout from '@/components/Layout';
import { Heading, Link, Section, SubHeading } from '@/styles/common';

export default function Home() {
    return (
        <Layout>
            <HeadingWrapper>
                <Heading>Info</Heading>
            </HeadingWrapper>
            <ContentWrapper>
                <ParagraphWrapper>
                    <SubHeading>About</SubHeading>
                    <Paragraph>
                        I am a hobbyist photographer who appreciates simplicity - I tend to opt for
                        a balanced and minimal composition in my photos, as I am generally
                        overwhelmed by clutter.
                    </Paragraph>
                    <Paragraph>
                        I am always open for casual photoshoots or to collaborate on projects. Feel
                        free to reach out to me via email at{' '}
                        <a href='mailto: nickoless.lee@gmail.com'>nickoless.lee@gmail.com</a> or DM
                        me on instagram.
                    </Paragraph>
                    <Paragraph>Currently based in Montreal.</Paragraph>
                </ParagraphWrapper>
                <ParagraphWrapper>
                    <SubHeading>Kit</SubHeading>
                    <Paragraph>
                        Olympus EMD EM-10 Mk. II <br />
                        Lumix G 25mm ASPH f/1.7 <br />
                        Lumix G 14mm ASPH f/2.5
                    </Paragraph>
                    <Paragraph>
                        Fujifilm X-T3 XF <br />
                        Fujifilm 35mm f/2 R WR
                    </Paragraph>
                </ParagraphWrapper>
            </ContentWrapper>
            <Link
                href='https://www.instagram.com/orientalshrug'
                style={{ marginTop: '5rem', marginLeft: '5rem' }}
            >
                Instagram →
            </Link>
        </Layout>
    );
}

const ContentWrapper = styled.div`
    display: flex;
`;

const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 200px;
    margin-bottom: 3srem;
`;

const ParagraphWrapper = styled.article`
    margin-left: 5rem;
    width: 650px;

    a {
        color: ${({ theme }) => theme.offBlack};
    }
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
`;
