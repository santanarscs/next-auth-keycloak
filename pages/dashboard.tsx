
import { GetServerSideProps } from 'next'
import { getSession, useSession, signOut } from "next-auth/client"
import { withSSRAuth } from "../util/withSSRAuth"

export default function Dashboard({user}: any) {
  const [ session ] = useSession()
  return (
    <>
      <h1>Dashboard</h1>
      <div>{JSON.stringify(session, null, 2)}</div>
      <br />
      <div>{JSON.stringify(user, null, 2)}</div>
      <div>
        <button onClick={() => signOut()}>Sair</button>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
  const { req } = ctx
  const session = await getSession({req})
  return {
    props: {
      user: session?.user
    }
  }
})
