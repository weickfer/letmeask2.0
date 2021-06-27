import { createContext, useContext, ReactNode } from 'react'

import { firebase, auth } from '../services/firebase'
import { usePersistedState } from '../utils/usePersistedState'
import { useToast } from './toast'


type IUser = {
  id: string
  name: string
  avatar: string
}

type AuthContextData = {
  user?: IUser
  signWithGoogle(): Promise<void>
}

const AuthContext = createContext({} as AuthContextData)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = usePersistedState<IUser>('@letmeask:user')
  const { addToast } = useToast()

  const signWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    const result = await auth.signInWithPopup(provider)

    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      if (!displayName || !photoURL) {
        addToast({
          title: 'Error ao se cadastrar :(',
          type: 'error'
        }, {
          position: 'top-center'
        })
        throw new Error('Missing information from Google Account.')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })

      addToast({
        title: 'Login efetuado com sucesso ;)',
        type: 'success'
      }, {
        position: 'top-center'
      })
    }
  }

  return (
    <AuthContext.Provider value={{ signWithGoogle, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.')
  }

  return context
}