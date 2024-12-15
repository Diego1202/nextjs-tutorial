import type { NextAuthConfig } from 'next-auth';
 
const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
};
 
export default nextConfig;