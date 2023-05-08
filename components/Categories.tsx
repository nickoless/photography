import { motion } from 'framer-motion';
import NextImage from 'next/image';
import NextLink from 'next/link';
import LazyLoad from 'react-lazy-load';
import styled from 'styled-components';

import { LinkVariant } from '@/styles/common';
import { device } from '@/styles/globalStyle';

const Categories = () => {
    return (
        <CategoryWrapper>
            {categories.map((category) => (
                <Link key={category.label} href={category.link} variants={LinkVariant}>
                    <LabelWrapper>
                        <Label>{category.index}</Label>
                        <Label>{category.label}</Label>
                    </LabelWrapper>
                    <LazyLoad>
                        <Image
                            src={category.image}
                            alt={category.altText}
                            height={650}
                            width={650}
                        />
                    </LazyLoad>
                </Link>
            ))}
        </CategoryWrapper>
    );
};

export default Categories;

const categories = [
    {
        index: '001',
        label: 'People',
        image: 'https://iumpottl.sirv.com/images/people/_6034932.jpg',
        altText: 'A side view of a man wearing a bucket hat',
        link: '/people',
    },
    {
        index: '002',
        label: 'Places',
        image: 'https://iumpottl.sirv.com/images/places/_9044161.jpg',
        altText: 'A view of a castle in Salzburg',
        link: '/places',
    },
];

const CategoryWrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 1rem;
    gap: 1rem;

    @media ${device.tablet} {
        margin: 1.5rem;
        gap: 1.5rem;
    }
`;

const Link = styled(motion(NextLink))`
    flex: 1;
    text-decoration: none;
    color: ${({ theme }) => theme.offBlack};
`;

const Image = styled(NextImage)`
    object-fit: cover;
    height: 150px;
    width: 100%;

    @media ${device.tablet} {
        height: 250px;
        width: 250px;
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
