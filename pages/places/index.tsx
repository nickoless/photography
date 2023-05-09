import Layout from '@/components/Layout';
import useGetPhotos from '@/hooks/useGetPhotos';
import { Heading, HeadingWrapper, Link, Section, SubHeading } from '@/styles/common';
import Photos from '@/components/Photos';

export default function Places() {
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
            {data && <Photos data={data} category={'places'} />}
        </Layout>
    );
}
