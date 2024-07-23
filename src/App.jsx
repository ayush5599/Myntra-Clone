
import './App.css'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'

function App() {

  const isUserLoggedIn = true
  return (
    <div>
      {
        isUserLoggedIn ? <HomePage /> : <LoginPage />
      }
    </div>
  )
}

export default App
