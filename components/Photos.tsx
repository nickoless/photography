import { useState } from 'react';
import { PhotoAlbum } from 'react-photo-album';
import styled from 'styled-components';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

import { Image } from '@/hooks/useGetPhotos';
import { Link } from '@/styles/common';
import NextJsImage from './NextJsImage';

interface Props {
    data: Image[];
    category: 'people' | 'places';
}

const Photos = ({ data, category }: Props) => {
    const [index, setIndex] = useState(-1);
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
                    onClick={({ index }) => setIndex(index)}
                />
            </PhotoAlbumWrapper>
            <Lightbox
                slides={data}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Thumbnails, Zoom]}
            />
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
