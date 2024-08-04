import User from '@/models/User';
import { compare } from 'bcryptjs';
import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';


export const authOption: NextAuthOptions = {
  secret: process.env.NEXTAUTH_KEY,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await User.findOne({ email: credentials.email }).select('+password');
        if (!user) return null;

        const isPasswordValid = await compare(
          credentials.password,
          user.password,
        );
        //console.log(isPasswordValid)
        if (isPasswordValid === false) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user } : any) => {
      if (user) {
        return {
          ...token,
          userId: user.userId,
          userRole: user.role,
        };
      }
      return token;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          usreId: token.userId,
          userRole: token.userRole,
        },
      };
    },
  },
};




