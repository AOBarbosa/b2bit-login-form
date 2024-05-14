import { Card } from '../../components/card'

export function ProfilePage() {
  return (
    <div className="flex h-screen w-full flex-col bg-slate-200">
      <header className="flex h-20 items-center justify-end bg-white px-9">
        <button className="h-14 w-72 rounded-lg bg-primary-blue text-zinc-50 hover:bg-primary-blue/90">
          Logout
        </button>
      </header>

      <main>
        <Card variant="profile">
          <h1>hello</h1>
        </Card>
      </main>
    </div>
  )
}
