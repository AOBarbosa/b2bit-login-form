import { LogOut } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { Card } from '../../components/card'
import { ProfileSkeleton } from '../../components/profile-skeleton'
import { api } from '../../lib/axios'

interface ProfileProps {
  name: string
  email: string
}

export function ProfilePage() {
  const [isSmallScreen, setisSmallScreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [profileData, setProfileData] = useState<ProfileProps>(
    {} as ProfileProps,
  )

  const navigate = useNavigate()

  async function fetchProfileData() {
    try {
      const response = await api.get('/profile')

      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async function handleResize() {
    setisSmallScreen(window.innerWidth < 640)
  }

  function logout() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')

    toast.success('Logout efetuado com sucesso!')

    navigate('/sign-in')
  }

  useEffect(() => {
    const fetchData = async () => {
      setProfileData(await fetchProfileData())
    }

    fetchData()
    setIsLoading(false)

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="flex h-screen w-full flex-col bg-slate-200 antialiased">
      <header className="flex h-20 items-center justify-between bg-white px-5 sm:px-9">
        <p className="text-primary-blue">
          Welcome{' '}
          <span className="text-primary-yellow"> {profileData.name}</span>
        </p>

        <button
          onClick={logout}
          className="flex h-14 w-20 flex-row items-center justify-center gap-4 rounded-lg bg-primary-blue text-zinc-50 hover:bg-primary-blue/90 sm:w-72"
        >
          {!isSmallScreen ? (
            <>
              <LogOut /> Logout
            </>
          ) : (
            <LogOut />
          )}
        </button>
      </header>

      <main className="flex h-full items-center justify-center">
        <Card variant="profile">
          {isLoading ? (
            <ProfileSkeleton />
          ) : (
            <>
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
                    {profileData.name}
                  </p>
                </section>

                <section className="flex w-full flex-col space-y-2">
                  <h1>
                    Your <span className="font-bold">E-mail</span>
                  </h1>

                  <p className="flex h-11 items-center rounded-lg bg-zinc-100 p-5">
                    {profileData.email}
                  </p>
                </section>
              </div>
            </>
          )}
        </Card>
      </main>
    </div>
  )
}
