import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),

    // ...add more providers here
  ],
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
