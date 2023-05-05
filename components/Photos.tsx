import { PhotoAlbum } from 'react-photo-album';
import styled from 'styled-components';
import NextJsImage from './NextJsImage';

interface Image {
    contentType: string;
    filename: string;
    isDirectory: boolean;
    meta: { width: number; height: number; duration: number };
    mtime: string;
    size: number;
}

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
                    if (containerWidth < 400) return 1;
                    if (containerWidth < 800) return 2;
                    return 3;
                }}
            />
            <p>BACK TO TOP</p>
        </PhotoAlbumWrapper>
    );
};

export default Photos;

const PhotoAlbumWrapper = styled.div`
    margin: 0 1.5rem;
    padding-bottom: 15rem;
`;
