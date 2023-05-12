import NextImage from 'next/image';
import type { RenderPhotoProps } from 'react-photo-album';
import styled from 'styled-components';

const NextJsImage = ({
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
}: RenderPhotoProps) => {
    return (
        <div style={{ ...wrapperStyle, position: 'relative' }}>
            <Image
                fill
                src={photo}
                placeholder={'blurDataURL' in photo ? 'blur' : undefined}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                {...{ alt, title, className, onClick }}
            />
        </div>
    );
};

export default NextJsImage;

const Image = styled(NextImage)`
    :hover {
        opacity: 0.85;
        transition: opacity 0.3s;
    }
`;
