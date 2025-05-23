"use client";

import { supabase } from '@/supabase/supabaseClient'
import { useRouter } from 'next/navigation'

export default function LoginUserSimple() {
  const router = useRouter()

  const handleOAuthLogin = async (provider: 'google' | 'apple') => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
    })

    if (error) {
      console.error(error)
      return
    }

    // Redirection automatique post OAuth depuis Supabase
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Connexion utilisateur simple</h1>
      <button
        onClick={() => handleOAuthLogin('google')}
        className="bg-red-500 text-white p-2 mb-2 w-64"
      >
        Se connecter avec Google
      </button>
      <button
        onClick={() => handleOAuthLogin('apple')}
        className="bg-black text-white p-2 w-64"
      >
        Se connecter avec Apple
      </button>
    </div>
  )
}
