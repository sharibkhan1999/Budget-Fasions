/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
remotePatterns: [
{ protocol: 'https', hostname: '**.supabase.co' },
{ protocol: 'https', hostname: 'images.unsplash.com' }
]
},
experimental: { serverActions: { allowedOrigins: ['*'] } }
};
module.exports = nextConfig;
