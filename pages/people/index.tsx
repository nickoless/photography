import Layout from '@/components/Layout';
import useGetPhotos from '@/hooks/useGetPhotos';
import { Heading, HeadingWrapper, Link, SubHeading } from '@/styles/common';
import LoadingIndicator from '@/components/LoadingIndicator';

import Photos from '@/components/Photos';

const People = () => {
    const { data, loading } = useGetPhotos('people');

    return (
        <Layout>
            <HeadingWrapper>
                <div>
                    <Heading>People</Heading>
                    <SubHeading>
                        Pictures of friends and people I&apos;ve met along the way.
                    </SubHeading>
                </div>
                <Link href='/places'>Places →</Link>
            </HeadingWrapper>
            {loading ? <LoadingIndicator /> : data && <Photos data={data} category={'people'} />}
        </Layout>
    );
};

export default People;
