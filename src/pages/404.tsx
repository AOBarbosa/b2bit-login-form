import { MonitorX } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 antialiased">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>

      <p className="text-accent-foreground">
        Voltar para a página de{' '}
        <Link to="/sign-in" className="text-primary-yellow">
          Sign In
        </Link>
      </p>

      <MonitorX className="size-20 animate-pulse text-primary-blue" />
    </div>
  )
}
