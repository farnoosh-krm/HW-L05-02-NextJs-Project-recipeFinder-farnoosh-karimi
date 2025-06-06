/** @type {import('next').NextConfig} */
const nextConfig = {
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
