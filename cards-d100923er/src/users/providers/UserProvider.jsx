import React, { createContext, useContext } from 'react'

export const UserDataContext = createContext();

export default function UserProvider({children}) {
  const user = {
    _id: "65424ae9a8d1eae12d31e360",
    isBusiness: true,
    isAdmin: false,
  }
  return <UserDataContext.Provider value={user}>
    {children}
  </UserDataContext.Provider>}

  export const UserData= () => {
    const context = useContext (UserDataContext)
    if (!context) throw new Error("useUser must be used within a provider");
    return context;
  }
