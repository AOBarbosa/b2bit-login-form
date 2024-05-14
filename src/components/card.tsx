import * as React from 'react'

interface CardTypeProps {
  variant: 'login-form' | 'profile'
  children: React.ReactNode
}

export function Card({ children, variant }: CardTypeProps) {
  return (
    <div
      className={
        variant === 'login-form'
          ? 'flex h-card w-96 flex-col items-center justify-center space-y-9 rounded-2xl bg-white drop-shadow-card sm:w-card'
          : 'flex h-80 w-96 flex-col items-center justify-center space-y-9 rounded-2xl bg-white drop-shadow-card sm:w-card'
      }
    >
      {children}
    </div>
  )
}
