import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import Layout from '@/src/app/[locale]/components/Layout';
import { Heading, Link as LinkEl, SubHeading } from '@/styles/common';
import { device } from '@/styles/globalStyle';

export default function Home() {
	// const myEmail = <a href='mailto: nickoless.lee@gmail.com'>nickoless.lee@gmail.com</a>;
	const t = useTranslations('Info');

	// TODO: Figure out the email shenanigans

	return (
		<Layout>
			<HeadingWrapper>
				<Heading>{t('heading')}</Heading>
			</HeadingWrapper>
			<ContentWrapper>
				<ParagraphWrapper>
					<SubHeading>{t('subheading')}</SubHeading>
					<Paragraph>{t('paragraph')}</Paragraph>
					<Paragraph>{t('paragraph2')}</Paragraph>
					{/* <Paragraph>{t.markup('paragraph3')}</Paragraph> */}
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
			<span style={{ paddingBottom: '3rem' }}>
				<Link href='https://www.instagram.com/orientalshrug'>Instagram →</Link>
			</span>
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

	@media ${device.laptop} {
		margin-left: 5rem;
	}
`;
