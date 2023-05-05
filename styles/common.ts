import styled from 'styled-components';
import NextLink from 'next/link';

// General

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    height: calc(100vh - 60px);
    width: 100%;
    max-width: 1900px;
    margin: auto;
`;

// Photos Pages

export const Heading = styled.h1`
    margin: 0;
    margin-left: 0.75rem;
    font-size: 8rem;
    line-height: 0.75;
`;

export const SubHeading = styled.h2`
    margin: 1.5rem;
    width: 450px;
    font-size: 1.5rem;
`;

export const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 325px;
`;

export const Link = styled(NextLink)`
    margin-left: 1.5rem;
    font-size: 2rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
`;
