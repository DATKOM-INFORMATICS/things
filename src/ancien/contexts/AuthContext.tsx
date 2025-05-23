import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import  supabase  from '@/supabase/supabaseClient'

const AuthContext = createContext<any>(null)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState('')
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setUser(data.session.user)
        fetchUserRole(data.session.user.id)
      }
      setLoading(false)
    })

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUser(session.user)
          fetchUserRole(session.user.id)
        } else {
          setUser(null)
          setRole('')
        }
      }
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  const fetchUserRole = async (userId: string) => {
    const { data, error } = await supabase
      .from('users_custom')
      .select('role')
      .eq('id', userId)
      .single()

    if (data) {
      setRole(data.role)
    }
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setRole('')
    router.push('/')
  }

  const value = {
    user,
    role,
    loading,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
