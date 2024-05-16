import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { SignInForm } from './sign-in-form'

describe('Sign In Form Component', () => {
  it('should render properly', () => {
    const wrapper = render(
      <BrowserRouter>
        <SignInForm />
      </BrowserRouter>,
    )

    const emailLabel = wrapper.getByText('E-mail')
    const passwordLabel = wrapper.getByText('Password')

    expect(emailLabel).toBeInTheDocument()
    expect(passwordLabel).toBeInTheDocument()
  })
})
