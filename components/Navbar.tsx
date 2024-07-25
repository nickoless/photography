import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import { Link } from '@/styles/common';

const Navbar = () => {
	const t = useTranslations('Navbar');

	return (
		<NavbarEl>
			<NavLink href='/'>{t('home')}</NavLink>
			<NavLink href='/info'>{t('info')}</NavLink>
			<Link href='/' locale='fr'>
				Change Lang
			</Link>
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
`;

const NavLink = styled(Link)`
	margin-right: 1.5rem;
`;
