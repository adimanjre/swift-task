/** @type {import('next').NextConfig} */


const nextConfig = {
    //async headers() {
    //    return [
    //        {
    //            source: '/(.*)',
    //            headers: [
    //                {
    //                    key: 'X-Frame-Options',
    //                    value: 'DENY',
    //                },
    //                {
    //                    key: 'Content-Security-Policy',
    //                    value:
    //                        "default-src 'self'; image-src 'self'; script-src 'unsafe-inline'; font-src 'self'",
    //                },
    //                {
    //                    key: 'X-Content-Type-Options',
    //                    value: 'nosniff',
    //                },
    //                {
    //                    key: 'Permissions-Policy',
    //                    value: "camera=(); battery=(self); geolocation=(); microphone=('self')",
    //                },
    //                {
    //                    key: 'Referrer-Policy',
    //                    value: 'origin-when-cross-origin',
    //                },
    //            ]
    //        }
    //    ]
    //}
}

module.exports = nextConfig
