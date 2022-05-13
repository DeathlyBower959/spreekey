import { Routes as ReactRoutes, Route,  } from 'react-router-dom'

// Pages
import Landing from './pages/Landing'
import PageNotFound from './pages/PageNotFound'


function App() {
  return (
    <ReactRoutes>
      {/* Page Not Found */}
      <Route path='*' element={<PageNotFound />} />

      {/* Landing Page */}
      <Route path='/' element={<Landing />} />
    </ReactRoutes>
  )
}

export default App

