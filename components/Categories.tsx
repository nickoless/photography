import NextImage from 'next/image';
import NextLink from 'next/link';
import styled from 'styled-components';

import PeopleImg from '@/public/people.jpg';
import PlacesImg from '@/public/places.jpg';

const Categories = () => {
    return (
        <CategoryWrapper>
            {categories.map((category) => (
                <Link key={category.label} href={category.link}>
                    <LabelWrapper>
                        <Label>{category.index}</Label>
                        <Label>{category.label}</Label>
                    </LabelWrapper>
                    <Image src={category.image} alt={category.altText} />
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
        image: PeopleImg,
        altText: 'A partial image of a girl wearing skates',
        link: '/people',
    },
    {
        index: '002',
        label: 'Places',
        image: PlacesImg,
        altText: 'todo',
        link: '/places',
    },
];

const CategoryWrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 1.5rem;
    gap: 1.5rem;
`;

const Link = styled(NextLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.offBlack};
`;

const Image = styled(NextImage)`
    object-fit: cover;
    height: 250px;
    width: 250px;
`;

const LabelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Label = styled.p`
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
`;
