/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "img.spoonacular.com",
                port: '',
                pathname: "**"
            }
        ]
    }
};

export default nextConfig;
