import { useSession, signOut } from "next-auth/react"

export default function Dashboard() {
  const { data: session, status } = useSession({required: true})
	const loading = status === 'loading'

  if (typeof window !== 'undefined' && loading) return null

  if (!session) { return  <h1>Acesso negado</h1> }

  return (
    <>
      <h1>Dashboard</h1>
      <div>{JSON.stringify(session, null, 2)}</div>
      <br />
      <div>
        <button onClick={() => signOut({callbackUrl: 'http://localhost:3003'})}>Sair</button>
      </div>
    </>
  )
}

