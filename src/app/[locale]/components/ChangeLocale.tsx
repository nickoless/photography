'use client';

import { useParams } from 'next/navigation';

import { locales } from '@/src/config';
import { usePathname, useRouter } from '@/src/navigation';
import { LocaleLink } from '@/styles/common';

interface Props {
	locale: string;
}

const ChangeLocale = ({ locale }: Props) => {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();

	const newLocale = locales.filter((v) => v !== locale)[0];

	const handleOnClick = () => {
		router.replace(
			// @ts-expect-error -- TypeScript will validate that only known `params`
			// are used in combination with a given `pathname`. Since the two will
			// always match for the current route, we can skip runtime checks.
			{ pathname, params },
			{ locale: newLocale }
		);
	};

	return <LocaleLink onClick={handleOnClick}>{newLocale}</LocaleLink>;
};

export default ChangeLocale;
