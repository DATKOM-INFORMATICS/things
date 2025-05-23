import { useEffect, useState } from 'react'
import { useAuth } from '@/ancien/contexts/AuthContext'
import { useRouter } from 'next/router'
import { supabase } from '@/supabase/supabaseClient'

export default function DashboardAdmin() {
  const { user, role, loading } = useAuth()
  const [users, setUsers] = useState<any[]>([])
  const [enterprises, setEnterprises] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!user || role !== 'admin')) {
      router.push('/login-admin')
    } else {
      fetchUsers()
      fetchEnterprises()
    }
  }, [user, role, loading])

  const fetchUsers = async () => {
    const { data, error } = await supabase.from('users_custom').select('*')
    if (data) {
      setUsers(data)
    }
  }

  const fetchEnterprises = async () => {
    const { data, error } = await supabase.from('enterprises').select('*')
    if (data) {
      setEnterprises(data)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Dashboard Admin</h1>

      <h2 className="text-2xl font-semibold">Utilisateurs</h2>
      <div className="w-full max-w-3xl mt-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 mb-2">
            <h3 className="text-xl font-semibold">{user.email}</h3>
            <p>Rôle: {user.role}</p>
            <button className="bg-blue-600 text-white p-2 mt-2">Modifier</button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8">Entreprises</h2>
      <div className="w-full max-w-3xl mt-4">
        {enterprises.map((enterprise) => (
          <div key={enterprise.id} className="border p-4 mb-2">
            <h3 className="text-xl font-semibold">{enterprise.name}</h3>
            <p>{enterprise.description}</p>
            <button className="bg-blue-600 text-white p-2 mt-2">Gérer</button>
          </div>
        ))}
      </div>

      <button
        onClick={() => router.push('/ajouter-entreprise')}
        className="bg-green-600 text-white p-2 mt-8"
      >
        Ajouter une entreprise
      </button>
    </div>
  )
}
