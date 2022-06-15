import React, { useContext, useEffect, useState } from "react";
//   create context globally
const Context = React.createContext()

export const Day5 = () => {
  const [userState, setUserState] = useState({
    Bob: true,
    Gary: true,
    Jessica: true,
    Sam: true,
    Eric: true,
  });

//   context provider wrapper and pass in value (must be in obj format)
  return (
    <Context.Provider value={{userState,setUserState}}>
        <UserList />
    </Context.Provider>
    );
};

const UserList = () => {
    // set context passed in value 
    const {userState,setUserState} = useContext(Context)
  // every 2 sec update userState
  useEffect(() => {
      const interval = setInterval(()=>{
        const usersKey = Object.keys(userState)
        const randomIdx = Math.floor(Math.random() * usersKey.length)
        console.log(randomIdx)
        const newUser = Object.assign({},userState)
        newUser[usersKey[randomIdx]] = !newUser[usersKey[randomIdx]]
        console.log(newUser[usersKey[randomIdx]])
        setUserState(newUser)
        console.log(newUser)
      },2000)
      return ()=> clearInterval(interval)
    // set interval every 2 sec here
  },[userState]);

  const UserItem = ()=>{
    return Object.entries(userState).map(entry=>{
      const [k,v] = entry
      return (`${k}: ${v ? '🟢' : '🔴'}`)
    })
  }

  return (
      <UserItem />
  )
};
