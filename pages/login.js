import { signIn } from "next-auth/client";

export default function Login() {
  return(
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <div>Login Page</div>
      <button style={{marginTop: '10px'}} onClick={() => signIn('keycloak')}>Fazer login</button>
    </div>
  )
}