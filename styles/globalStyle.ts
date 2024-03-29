import { createGlobalStyle } from 'styled-components';

// Base theme

export const theme = {
    background: '#F2F2F2',
    offBlack: '#343231',
    offWhite: '#E7E9EA',
};

// Media queries

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
};

// Global styles

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background: ${theme.background};
        color: ${theme.offBlack};
        letter-spacing: 1px;
    }

    h1, h2 {
        text-transform: uppercase;
        font-weight: 600;
    }
`;
