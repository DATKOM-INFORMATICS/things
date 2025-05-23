import { useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/supabase/supabaseClient'

export default function LoginEntreprise() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    setError('')

    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (loginError) {
      setError(loginError.message)
      return
    }

    const userId = data.user?.id

    if (userId) {
      // Vérification du rôle dans users_custom
      const { data: userData, error: fetchError } = await supabase
        .from('users_custom')
        .select('role')
        .eq('id', userId)
        .single()

      if (fetchError) {
        setError("Compte introuvable dans la base utilisateurs.")
        return
      }

      if (userData?.role !== 'entreprise') {
        setError("Ce compte n'est pas autorisé ici.")
        return
      }

      // Redirection vers le dashboard entreprise
      router.push('/dashboard-entreprise')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Connexion Entreprise</h1>

      <input
        className="border p-2 mb-2 w-64"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 mb-2 w-64"
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white p-2 w-64"
      >
        Se connecter
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}
