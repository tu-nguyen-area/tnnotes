import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/signin',
    newUser: '/home',
  },
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isSignedIn = !!auth?.user;
      const isOnHome = nextUrl.pathname.startsWith("/home");
      const isOnSignUp = nextUrl.pathname.startsWith("/signup");
      const isOnSignIn = nextUrl.pathname.startsWith("/signin");
      const isOnAbout = nextUrl.pathname.startsWith("/about");

      if(isSignedIn && (isOnSignIn || isOnSignUp)) {
        return Response.redirect(new URL('/home', nextUrl as unknown as URL));
      }

      if(isOnSignUp || isOnSignIn) {
        return true;
      }

      if(isOnHome) {
        if(isSignedIn) return true;
          return false;
      }

      if(isOnAbout) {
        if(isSignedIn) return true;
          return true;
      }

      if(isSignedIn) {
        return Response.redirect(new URL('/home', nextUrl as unknown as URL));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
