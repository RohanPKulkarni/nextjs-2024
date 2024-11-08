/** @type {import('next').NextConfig} */

import withPWA from '@ducanh2912/next-pwa';

const nextConfig = withPWA({
  pwa: {
    dest: 'public', 
  },

});

export default nextConfig;
