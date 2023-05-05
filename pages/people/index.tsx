import Layout from '@/components/Layout';
import useGetPhotos from '@/hooks/useGetPhotos';
import { Heading, HeadingWrapper, Link, Section, SubHeading } from '@/styles/common';

import Photos from '@/components/Photos';

export default function People() {
    const { data, loading } = useGetPhotos('people');

    return (
        <Layout>
            <Section>
                <HeadingWrapper>
                    <div>
                        <Heading>People</Heading>
                        <SubHeading>
                            Pictures of friends and people I've met along the way.
                        </SubHeading>
                    </div>
                    <Link href='/places'>Places →</Link>
                </HeadingWrapper>
                {data && <Photos data={data} category={'people'} />}
            </Section>
        </Layout>
    );
}
