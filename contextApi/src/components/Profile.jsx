import { useContext  } from "react"
import UserContext from "../context/userContext"
// import UserContextProvider from "../context/UserContextProvider"

function Profile(){
    const {user}=useContext(UserContext);

  
    if(!user)  return <h1>please login</h1>
      console.log(user.userName)
       
    return <div>Welcome:{user.userName}
    <h1>and your Password is:{user.password}</h1></div>
}
export default Profile; 