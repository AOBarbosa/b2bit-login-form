import { Card } from '../../components/card'
import { SignInForm } from '../../components/sign-in-form'

export function LoginPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-200 antialiased">
        <Card variant="login-form">
          <h1 className="font-logo text-9xl font-bold tracking-tighter text-primary-blue">
            b2b<span className="text-primary-yellow">it</span>
          </h1>

          <SignInForm />
        </Card>
      </main>
    </>
  )
}
