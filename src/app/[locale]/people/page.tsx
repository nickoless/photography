'use client';

import { useTranslations } from 'next-intl';

import Layout from '@/src/app/[locale]/components/Layout';
import LoadingIndicator from '@/src/app/[locale]/components/LoadingIndicator';
import Photos from '@/src/app/[locale]/components/Photos';
import useGetPhotos from '@/hooks/useGetPhotos';
import { Heading, HeadingWrapper, Link, SubHeading } from '@/styles/common';

const People = () => {
	const { data, loading } = useGetPhotos('people');
	const t = useTranslations('People');

	return (
		<Layout>
			<HeadingWrapper>
				<div>
					<Heading>{t('heading')}</Heading>
					<SubHeading>{t('subheading')}</SubHeading>
				</div>
				<Link href='/places'>{t('placesLink')}</Link>
			</HeadingWrapper>
			{loading ? <LoadingIndicator /> : data && <Photos data={data} category={'people'} />}
		</Layout>
	);
};

export default People;
