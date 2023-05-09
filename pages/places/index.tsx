import Layout from '@/components/Layout';
import LoadingIndicator from '@/components/LoadingIndicator';
import Photos from '@/components/Photos';
import useGetPhotos from '@/hooks/useGetPhotos';
import { Heading, HeadingWrapper, Link, SubHeading } from '@/styles/common';

const Places = () => {
    const { data, loading } = useGetPhotos('places');

    return (
        <Layout>
            <HeadingWrapper>
                <div>
                    <Heading>Places</Heading>
                    <SubHeading>Pictures of places I&apos;ve visited.</SubHeading>
                </div>
                <Link href='/people'>People →</Link>
            </HeadingWrapper>
            {loading ? <LoadingIndicator /> : data && <Photos data={data} category={'places'} />}
        </Layout>
    );
};

export default Places;
