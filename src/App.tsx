import './App.css'
import { Route, Routes } from 'react-router'
import RootLayout from './pages/RootLayout'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<ErrorPage />}></Route>
        <Route element={<RootLayout />}>
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
