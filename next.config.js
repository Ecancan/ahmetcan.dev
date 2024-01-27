/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/hi',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
