import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { api } from '../lib/axios'

export function SignInForm() {
  const navigate = useNavigate()

  async function handleSignInForm() {
    try {
      const response = await api.post('login/', values)

      localStorage.setItem('refreshToken', response.data.tokens.refresh)

      localStorage.setItem('accessToken', response.data.tokens.access)

      navigate('/profile')
    } catch (error) {
      toast.error('Email ou Senha incorretos. Tente novamente.')

      console.log(error)
    }
  }

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => handleSignInForm(),
  })

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col space-y-7 px-6"
    >
      <div className="flex w-full flex-col space-y-2">
        <label htmlFor="email">Email </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="@gmail.com"
          onChange={handleChange}
          value={values.email}
          className="h-14 rounded-lg bg-zinc-100 p-5 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
        />
      </div>

      <div className="flex w-full flex-col space-y-2">
        <label htmlFor="email">Password </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="************"
          onChange={handleChange}
          value={values.password}
          className="h-14 rounded-lg bg-zinc-100 p-5 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
        />
      </div>

      <button
        type="submit"
        className="h-14 rounded-lg bg-primary-blue text-zinc-50 hover:bg-primary-blue/90"
      >
        Sign In
      </button>
    </form>
  )
}
