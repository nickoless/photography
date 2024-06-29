import { GetStaticProps } from 'next';

import Layout from '@/components/Layout';
import LoadingIndicator from '@/components/LoadingIndicator';
import Photos from '@/components/Photos';
import useGetPhotos from '@/hooks/useGetPhotos';
import { Heading, HeadingWrapper, Link, SubHeading } from '@/styles/common';

// TODO: Types
const People = ({ section }) => {
	const { data, loading } = useGetPhotos('people');
	const content = section.people;

	return (
		<Layout>
			<HeadingWrapper>
				<div>
					<Heading>{content.heading}</Heading>
					<SubHeading>{content.subheading}</SubHeading>
				</div>
				<Link href="/places">{content.placesLink}</Link>
			</HeadingWrapper>
			{loading ? <LoadingIndicator /> : data && <Photos data={data} category={'people'} />}
		</Layout>
	);
};

export default People;

export const getStaticProps = (async (context) => {
	return {
		props: {
			section: (await import(`public/locales/${context.locale}.json`)).default,
		},
	};
}) satisfies GetStaticProps;
