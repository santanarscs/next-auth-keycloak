import { useSession } from "next-auth/client"
import { withSSRAuth } from "../util/withSSRAuth"

export default function Dashboard() {
  const [ session ] = useSession()
  return (
    <>
      <h1>Dashboard</h1>
      <div>{JSON.stringify(session, null, 2)}</div>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {

    }
  }
})