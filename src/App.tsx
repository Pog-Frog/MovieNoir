import { Route, Routes } from 'react-router'
import RootLayout from './pages/RootLayout'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import DetailsPage from './pages/DetailsPage'
import MoviesPage from './pages/MoviesPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route element={<RootLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path="/movies/:option" element={<MoviesPage />} />
          <Route path="/:category/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
