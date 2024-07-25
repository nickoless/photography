'use client';

import { useTranslations } from 'next-intl';

import Layout from '@/src/app/[locale]/components/Layout';
import LoadingIndicator from '@/src/app/[locale]/components/LoadingIndicator';
import Photos from '@/src/app/[locale]/components/Photos';
import useGetPhotos from '@/hooks/useGetPhotos';
import { Heading, HeadingWrapper, Link, SubHeading } from '@/styles/common';

const Places = () => {
	const { data, loading } = useGetPhotos('places');
	const t = useTranslations('Places');

	return (
		<Layout>
			<HeadingWrapper>
				<div>
					<Heading>{t('heading')}</Heading>
					<SubHeading>{t('subheading')}</SubHeading>
				</div>
				<Link href='/people'>{t('peopleLink')}</Link>
			</HeadingWrapper>
			{loading ? <LoadingIndicator /> : data && <Photos data={data} category={'places'} />}
		</Layout>
	);
};

export default Places;
