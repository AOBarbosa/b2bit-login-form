import './global.css'

export function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-200 antialiased">
      <>
        <div className="flex h-card w-96 flex-col items-center justify-center space-y-9 rounded-2xl bg-white drop-shadow-card sm:w-card">
          <h1 className="font-logo text-9xl font-bold tracking-tighter text-primary-blue">
            b2b<span className="text-primary-yellow">it</span>
          </h1>

          <form className="flex w-full flex-col space-y-7 px-6">
            <section className="flex w-full flex-col space-y-2">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                className="h-14 rounded-lg bg-zinc-100 p-5 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
                type="text"
                placeholder="@gmail.com"
              />
            </section>

            <section className="flex w-full flex-col space-y-2">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className="h-14 rounded-lg bg-zinc-100 p-5 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
                type="password"
                placeholder="*****************"
              />
            </section>

            <button
              type="submit"
              className="h-14 rounded-lg bg-primary-blue text-zinc-50 hover:bg-primary-blue/90"
            >
              Sign In
            </button>
          </form>
        </div>
      </>
    </main>
  )
}
