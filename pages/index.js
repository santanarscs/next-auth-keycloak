import { useSession } from 'next-auth/client'

export default function Home() {
  const [session] = useSession()
  
  return (
    <div>Carregando keycloak</div>
  )  
}
