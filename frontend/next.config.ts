import type { NextConfig } from 'next';

/**
 * @description Next.js configuration options.
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return NextConfig
 */
const nextConfig: NextConfig = {
    /* config options here */
    output: 'standalone',
    experimental: {
        agentFeedback: true,
    },
    cacheComponents: true,
    partialPrefetching: true,
    turbopack: {
        rules: {
            '*.css': {
                loaders: ['@tailwindcss/turbopack'],
                as: '*.css',
            },
        },
    },
};

export default nextConfig;
