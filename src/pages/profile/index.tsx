import { useEffect } from 'react'

import { Card } from '../../components/card'
import { api } from '../../lib/axios'

export function ProfilePage() {
  // async function fetchUserData() {
  //   // Replace with your JWT
  //   const token = localStorage.getItem('refreshToken')
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }

  //   try {
  //     const response = await api.get('/profile', config)
  //     console.log(response.data)
  //   } catch (error) {
  //     console.error('Failed to fetch user data:', error)
  //   }
  // }

  // fetchUserData()

  async function fetchUserData() {
    const token = localStorage.getItem('accessToken')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    try {
      const response = await api.get('/profile/', config)
      console.log(response.data)
    } catch (error) {
      console.error('Failed to fetch user data:', error)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className="flex h-screen w-full flex-col bg-slate-200 antialiased">
      <header className="flex h-20 items-center justify-end bg-white px-5 sm:px-9">
        <button className="h-14 w-56 rounded-lg bg-primary-blue text-zinc-50 hover:bg-primary-blue/90 sm:w-72">
          Logout
        </button>
      </header>

      <main className="flex h-full items-center justify-center">
        <Card variant="profile">
          <div className="flex size-20 flex-col items-center space-y-2">
            <h1 className="text-xs font-semibold">Profile picture</h1>
            <div className="size-16">
              <img
                className="rounded-lg"
                src="https://github.com/AOBarbosa.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex w-full flex-col space-y-4 px-7">
            <section className="flex w-full flex-col space-y-2">
              <h1>
                Your <span className="font-bold">Name</span>
              </h1>

              <p className="flex h-11 items-center rounded-lg bg-zinc-100 p-5">
                Andre Barbosa
              </p>
            </section>

            <section className="flex w-full flex-col space-y-2">
              <h1>
                Your <span className="font-bold">E-mail</span>
              </h1>

              <p className="flex h-11 items-center rounded-lg bg-zinc-100 p-5">
                andre-barbosa@dev.com
              </p>
            </section>
          </div>
        </Card>
      </main>
    </div>
  )
}
