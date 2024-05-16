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

  //   function handleSubmit(values: SignInFormProps) {
  //     // try {
  //     //   const response = await api.post('/login/', values)
  //     //   console.log(response.data)
  //     // } catch (error) {
  //     //   console.log('Deu merda...')
  //     // }
  //     alert(JSON.stringify(values, null, 2))
  //   }

  //   return (
  //     <div className="w-full">
  //       <Formik
  //         initialValues={{ email: '', password: '' }}
  //         validationSchema={SignInSchema}
  //         onSubmit={handleSubmit}
  //       >
  //         <Form>
  //           <div className="flex w-full flex-col space-y-7 px-6">
  //             <div className="flex w-full flex-col space-y-2">
  //               <label htmlFor="email">E-mail</label>
  //               <Field
  //                 name="email"
  //                 className="h-14 rounded-lg bg-zinc-100 p-5 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
  //                 type="email"
  //                 placeholder="@gmail.com"
  //               />
  //             </div>

  //             <div className="flex w-full flex-col space-y-2">
  //               <label htmlFor="password">Password</label>
  //               <Field
  //                 id="password"
  //                 className="h-14 rounded-lg bg-zinc-100 p-5 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
  //                 type="password"
  //                 placeholder="*****************"
  //               />
  //             </div>

  //             <button
  //               type="submit"
  //               className="h-14 rounded-lg bg-primary-blue text-zinc-50 hover:bg-primary-blue/90"
  //             >
  //               Sign In
  //             </button>
  //           </div>
  //         </Form>
  //       </Formik>
  // </div>
  //   )
}
