const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lfgwrrbckdamneuhjcsp.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY,
  },
};

export default nextConfig;
