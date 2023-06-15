import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
    // ...add more providers here
  ]
}

export default NextAuth(authOptions)
