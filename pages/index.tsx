import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client'

export default function Index(){
  const router = useRouter()
  const [session, triggerEvent] = useSession()

  if(!triggerEvent && !session) {
    signIn('keycloak')
  } 

  if(!triggerEvent && session) {
    router.push('/dashboard')
  }
  return (
    <div>
      Você será redirecionado...
    </div>
  )
}