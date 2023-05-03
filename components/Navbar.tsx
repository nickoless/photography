import styled from "styled-components";
import Link from "next/link";

const Navbar = () => {
    return (
        <NavbarEl>
            <p>TUESDAY, MAY 2. 11:23 AM (EST)</p>
            <div>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                <NavLink href="/about">About</NavLink>
            </div>
        </NavbarEl>
    );
};

export default Navbar;

const NavbarEl = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
`;

const NavLink = styled(Link)`
    padding-right: 1.5rem;
    color: ${({ theme }) => theme.offBlack};
    font-size: 1.35rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
`;
