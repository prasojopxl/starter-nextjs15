const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
                pathname: "**",
            },
        ],
    },
};

module.exports = withNextIntl(nextConfig);
