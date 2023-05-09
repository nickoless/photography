import { PhotoAlbum } from 'react-photo-album';
import styled from 'styled-components';

import NextJsImage from './NextJsImage';
import { Image } from '@/hooks/useGetPhotos';

interface Props {
    data: Image[];
    category: 'people' | 'places';
}

const Photos = ({ data, category }: Props) => {
    return (
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
            <p>BACK TO TOP</p>
        </PhotoAlbumWrapper>
    );
};

export default Photos;

const PhotoAlbumWrapper = styled.div`
    padding-bottom: 15rem;
`;
