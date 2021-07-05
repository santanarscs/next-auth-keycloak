import { getProviders, getSession } from "next-auth/client"


export function withSSRAuth(fn) {
  return async (ctx) => {
    const { req } = ctx
    const session = await getSession({req})
    if(!session?.user)  {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }
    return await fn(ctx)
  }
}