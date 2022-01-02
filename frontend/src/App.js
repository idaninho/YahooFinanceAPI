import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Header from './components/Header'
import MarketList from './screens/MarketList'

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          {isAuthenticated && <Route path="/" element={<MarketList />} />}
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
