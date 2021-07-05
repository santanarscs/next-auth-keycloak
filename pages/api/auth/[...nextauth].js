import NextAuth from 'next-auth'

export default NextAuth({
  providers: [
    {
      id: "keycloak",
      name: "Keycloak",
      type: "oauth",
      version: "2.0",
      params: { grant_type: "authorization_code" },
      scope: "openid",
      accessTokenUrl: `${process.env.KEYCLOAK_BASE_URL}/token`,
      requestTokenUrl: `${process.env.KEYCLOAK_BASE_URL}/auth`,
      authorizationUrl: `${process.env.KEYCLOAK_BASE_URL}/auth?response_type=code`,
      clientId: "cigeo",
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      profileUrl: `${process.env.KEYCLOAK_BASE_URL}/userinfo`,
      async profile(profile) {
        return { ...profile, id: profile.sub }
      }
      // async profile: (profile) => ({ ...profile, id: profile.sub }),
    }
  ],
  callbacks: {
    async jwt(token, user, account, profile) {
      user && (token.user = user)
      return token
    },
    async session(session, user, token) {
      return {
        ...session,
        ...user
      }
    },
  }
})