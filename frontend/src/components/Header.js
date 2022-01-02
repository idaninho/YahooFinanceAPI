import React from 'react'
import { HeaderContainer, OptionsContainer } from './styles/Header-styles'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './Login'
import Logout from './Logout'

function Header() {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }
  return (
    <HeaderContainer>
      <OptionsContainer>
        {isAuthenticated ? <Logout /> : <Login />}
      </OptionsContainer>
    </HeaderContainer>
  )
}

export default Header
