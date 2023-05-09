import styled from 'styled-components';

import Layout from '@/components/Layout';
import { Heading, Link as LinkEl, SubHeading } from '@/styles/common';
import { device } from '@/styles/globalStyle';

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
                        more of a balanced and minimal composition in my photos.
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
            <Link href='https://www.instagram.com/orientalshrug'>Instagram →</Link>
        </Layout>
    );
}

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.laptop} {
        flex-direction: row;
    }
`;

const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 3rem;

    @media ${device.laptop} {
        margin-top: 4rem;
        margin-bottom: 4rem;
    }
`;

const ParagraphWrapper = styled.article`
    a {
        color: ${({ theme }) => theme.offBlack};
    }

    @media ${device.laptop} {
        width: 650px;
        margin-left: 5rem;
    }
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
`;

const Link = styled(LinkEl)`
    margin-top: 5rem;
    padding-bottom: 3rem;

    @media ${device.laptop} {
        margin-left: 5rem;
        padding-bottom: 0;
    }
`;
