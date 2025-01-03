import Login from './components/login'
import Profile from './components/profile'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
function App() {
 

  return (
    
    <UserContextProvider>
      <h1>Login please here</h1>
<Login/>
<Profile/>

    </UserContextProvider>

  )
}

export default App
