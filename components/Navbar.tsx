import Link from 'next/link';
import styled from 'styled-components';

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

const NavLink = styled(Link)`
    padding-right: 1.5rem;
    color: ${({ theme }) => theme.offBlack};
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;

    @media ${device.tablet} {
        font-size: 1.5rem;
    }
`;
