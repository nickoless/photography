/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'iumpottl.sirv.com',
                port: '',
                pathname: '/images/**',
            },
        ],
    },
};

module.exports = nextConfig;
