import { useEffect, useState } from 'react'
import { useAuth } from '@/ancien/contexts/AuthContext'
import { useRouter } from 'next/router'
import { supabase } from '@/supabase/supabaseClient'

export default function DashboardEntreprise() {
  const { user, role, loading } = useAuth()
  const [ideas, setIdeas] = useState<any[]>([])
  const [products, setProducts] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!user || role !== 'entreprise')) {
      router.push('/login-entreprise')
    } else {
      fetchIdeas()
      fetchProducts()
    }
  }, [user, role, loading])

  const fetchIdeas = async () => {
    const { data, error } = await supabase.from('ideas').select('*')
    if (data) {
      setIdeas(data)
    }
  }

  const fetchProducts = async () => {
    const { data, error } = await supabase.from('products').select('*')
    if (data) {
      setProducts(data)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Dashboard Entreprise</h1>
      <h2 className="text-2xl font-semibold">Idées d'Améliorations</h2>
      <div className="w-full max-w-3xl mt-4">
        {ideas.map((idea) => (
          <div key={idea.id} className="border p-4 mb-2">
            <h3 className="text-xl font-semibold">{idea.title}</h3>
            <p>{idea.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8">Produits</h2>
      <div className="w-full max-w-3xl mt-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 mb-2">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p>{product.description}</p>
            <button className="bg-blue-600 text-white p-2 mt-2">Gérer</button>
          </div>
        ))}
      </div>

      <button
        onClick={() => router.push('/ajouter-produit')}
        className="bg-green-600 text-white p-2 mt-8"
      >
        Ajouter un produit
      </button>
    </div>
  )
}
