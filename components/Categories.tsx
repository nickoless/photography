import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import NextImage from 'next/image';
import styled from 'styled-components';

import { Link as NextLink } from '@/src/navigation';
import { LinkVariant } from '@/styles/common';
import { device } from '@/styles/globalStyle';

const Categories = () => {
	const t = useTranslations('Categories');

	return (
		<CategoryWrapper>
			{categories.map((category) => (
				<Link key={category.label} href={category.link} variants={LinkVariant}>
					<LabelWrapper>
						<Label>{category.index}</Label>
						<Label>{t(category.label)}</Label>
					</LabelWrapper>
					<ImageWrapper>
						<Image
							src={category.image}
							alt={category.altText}
							blurDataURL={category.image}
							height={650}
							width={650}
						/>
					</ImageWrapper>
				</Link>
			))}
		</CategoryWrapper>
	);
};

export default Categories;

const categories = [
	{
		index: '001',
		label: 'people',
		image: 'https://iumpottl.sirv.com/images/people/_6034932.jpg',
		altText: 'A side view of a man wearing a bucket hat',
		link: '/people',
	},
	{
		index: '002',
		label: 'places',
		image: 'https://iumpottl.sirv.com/images/places/_9044161.jpg',
		altText: 'A view of a castle in Salzburg',
		link: '/places',
	},
];

const CategoryWrapper = styled.div`
	display: flex;
	margin-top: auto;
	gap: 1rem;

	@media ${device.tablet} {
		position: absolute;
		bottom: 0;
		right: 0;
		margin: 1.5rem;
		gap: 1.5rem;
	}
`;

const ImageWrapper = styled.div`
	height: 150px;
	overflow: hidden;

	@media ${device.tablet} {
		height: 250px;
	}
`;

const Image = styled(NextImage)`
	object-fit: cover;
	height: 150px;
	width: 100%;
	transition: transform 0.5s;

	@media ${device.tablet} {
		height: 250px;
		width: 250px;
	}
`;
const Link = styled(motion(NextLink))`
	flex: 1;
	text-decoration: none;
	color: ${({ theme }) => theme.offBlack};

	&:hover ${Image} {
		transform: scale(1.1);
	}
`;

const LabelWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Label = styled.p`
	margin: 0;
	font-size: 1rem;
	font-weight: 600;
	text-decoration: none;
	text-transform: uppercase;

	@media ${device.tablet} {
		font-size: 1.25rem;
	}
`;
