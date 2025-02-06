import React from 'react'


export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  return (
    <div>

    <AuthContext.Provider value={{user: null}}>
    {children}
    </AuthContext.Provider>
        

      
    </div>
  )
}

export default AuthProvider
