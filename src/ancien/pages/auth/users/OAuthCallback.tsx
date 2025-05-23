import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/supabase/supabaseClient'

export default function OAuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleOAuthUser = async () => {
      const { data, error } = await supabase.auth.getUser()

      if (error) {
        console.error(error)
        return
      }

      const userId = data.user?.id
      const email = data.user?.email

      if (userId && email) {
        // Vérifie si user existe dans users_custom
        const { data: existingUser, error: checkError } = await supabase
          .from('users_custom')
          .select('*')
          .eq('id', userId)
          .single()

        if (!existingUser) {
          // Ajoute dans users_custom
          const { error: insertError } = await supabase
            .from('users_custom')
            .insert([
              {
                id: userId,
                email: email,
                role: 'user',
              },
            ])

          if (insertError) {
            console.error(insertError)
          }
        }

        // Redirige vers tableau de bord user
        router.push('/dashboard-user')
      }
    }

    handleOAuthUser()
  }, [router])

  return <p>Connexion en cours...</p>
}
