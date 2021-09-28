import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'

export default function Index(){
  const router = useRouter()
  const { data: session, status } = useSession({required: false})
	const loading = status === 'loading'
  // if(!loading && !session) {
  //   signIn()
  // }
  if(status === 'unauthenticated') {
    signIn('keycloak')
  }

  if(!loading && session) {
    router.push('/dashboard')
  }
  return (
    <div>
      Você será redirecionado...
    </div>
  )
}