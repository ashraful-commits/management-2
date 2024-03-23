import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        // perform you login logic
        const data = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}users/sign_in`,
          { email, password }
        );

        const user = data.data;
        if (data.data.success) {
          return user;
        } else {
          return null;
        }
        // if user is logging in successfully play this
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user.data;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
