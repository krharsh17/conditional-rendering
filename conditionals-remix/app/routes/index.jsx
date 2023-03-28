import { useState } from "react";

// Define two components
const LoginButton = (props) => {
  return <>
    <div>You are logged out</div>
    <div><button onClick={props.toggleLoggedIn}>Log In</button></div>
  </>
}

const LogoutButton = (props) => {
  return <>
    <div>You are now logged in</div>
    <div><button onClick={props.toggleLoggedIn}>Log Out</button></div>
  </>
}

export default function Index() {
  // Define a state that the condition will be based upon
  const [loggedIn, setLoggedIn] = useState(false);

  // Define a function that can change the condition value
  const toggleLoggedIn = () => {
    setLoggedIn(currState => !currState)
  }

  // Use a switch statement to render one of two components based on login state
  switch(loggedIn) {
    case true: return <LogoutButton toggleLoggedIn={toggleLoggedIn} />
    case false: return <LoginButton toggleLoggedIn={toggleLoggedIn} />
    default: return null
  }
}