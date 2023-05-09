import Link from 'next/link';
import styled from 'styled-components';

import { Link as LinkEl } from '@/styles/common';
import { device } from '@/styles/globalStyle';

const Navbar = () => {
    return (
        <NavbarEl>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/info'>Info</NavLink>
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

const NavLink = styled(LinkEl)`
    padding-right: 1.5rem;
`;
