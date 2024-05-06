import { useState } from 'react'
// import './App.css'
import Web3Provider from './contexts/Web3Provider'
import Wallet from './pages/Wallet'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'


function App() {

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #4e54c8, #8f94fb)', // Gradient colors
      minHeight: '100vh', // Make sure the background covers the entire viewport height
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Web3Provider>

        <RouterProvider router={routes}></RouterProvider>


      </Web3Provider>

    </div>
  )
}

export default App
