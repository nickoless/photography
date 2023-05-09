import { PhotoAlbum } from 'react-photo-album';
import styled from 'styled-components';

import NextJsImage from './NextJsImage';
import { Image } from '@/hooks/useGetPhotos';
import { Link } from '@/styles/common';

interface Props {
    data: Image[];
    category: 'people' | 'places';
}

const Photos = ({ data, category }: Props) => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            <PhotoAlbumWrapper>
                <PhotoAlbum
                    photos={data}
                    layout={'masonry'}
                    renderPhoto={NextJsImage}
                    columns={(containerWidth) => {
                        if (containerWidth < 500) return 1;
                        if (containerWidth < 1000) return 2;
                        return 3;
                    }}
                />
            </PhotoAlbumWrapper>
            <span style={{ paddingBottom: '3rem' }}>
                <ScrollToTop href='#' onClick={() => scrollToTop()}>
                    Back to Top
                </ScrollToTop>
            </span>
        </>
    );
};

export default Photos;

const PhotoAlbumWrapper = styled.div`
    padding-bottom: 15rem;
`;

const ScrollToTop = styled(Link)`
    margin: auto;
`;
