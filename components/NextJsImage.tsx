import Image from 'next/image';
import type { RenderPhotoProps } from 'react-photo-album';

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
                {...{ alt, title, sizes, className, onClick }}
            />
        </div>
    );
};

export default NextJsImage;
