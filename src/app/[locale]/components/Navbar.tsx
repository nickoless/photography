import { useTranslations, useLocale } from 'next-intl';
import styled from 'styled-components';

import { Link, LocaleLink } from '@/styles/common';
import ChangeLocale from './ChangeLocale';

const Navbar = () => {
	const t = useTranslations('Navbar');
	const locale = useLocale();

	return (
		<NavbarEl>
			<Link href='/'>{t('home')}</Link>
			<Link href='/info'>{t('info')}</Link>
			<LocaleLink $noPointer={true}>|</LocaleLink>
			<ChangeLocale locale={locale} />
		</NavbarEl>
	);
};

export default Navbar;

const NavbarEl = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 80px;
	width: 100%;

	> * {
		margin-right: 1.5rem;a
	}
`;

// const NavLink = styled(Link)`
// 	margin-right: 1.5rem;
// `;
