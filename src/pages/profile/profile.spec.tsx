import { render, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { api } from '../../lib/axios'
import { ProfilePage } from '.'

describe('Profile Page', () => {
  it('should render successfully', () => {
    const wrapper = render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>,
    )

    const logoutButton = wrapper.getByText('Logout')

    expect(logoutButton).toBeInTheDocument()
  })

  it('should load the user data', async () => {
    const mockUserData = { name: 'Cliente', email: 'cliente@youdrive.com' }
    vi.spyOn(api, 'get').mockResolvedValueOnce({ data: mockUserData })

    const wrapper = render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>,
    )

    await waitFor(() => {
      const emailElement = wrapper.getByText(mockUserData.email)

      expect(emailElement).toBeInTheDocument()
    })
  })
})
