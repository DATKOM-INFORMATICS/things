import { useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/supabase/supabaseClient'

export default function SignUpAdmin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSignUp = async () => {
    setError('')

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.")
      return
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (signUpError) {
      setError(signUpError.message)
      return
    }

    // Ajout du rôle 'admin' dans la table users_custom
    const { error: insertError } = await supabase
      .from('users_custom')
      .insert([{ id: data.user?.id, email: data.user?.email, role: 'admin' }])

    if (insertError) {
      setError("Erreur lors de la création du compte admin.")
      return
    }

    // Redirection vers le dashboard admin
    router.push('/dashboard-admin')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Inscription Admin</h1>

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
      <input
        className="border p-2 mb-2 w-64"
        type="password"
        placeholder="Confirmer le mot de passe"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        onClick={handleSignUp}
        className="bg-blue-600 text-white p-2 w-64"
      >
        S'inscrire
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}
