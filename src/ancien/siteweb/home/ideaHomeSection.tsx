
import supabase from '@/supabase/supabaseClient'
import Link from "next/link";

export default async function IdeasSection() {
  const { data: ideas, error } = await supabase
    .from("idees")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error(error);
    return <p>Erreur de chargement des idées</p>;
  }

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Les idées du moment</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className="border rounded p-4 bg-white shadow-sm hover:shadow-lg transition"
          >
            <span className="text-sm text-gray-500">{idea.type}</span>
            <h3 className="text-xl font-semibold my-2">{idea.title}</h3>
            <p className="text-gray-700 mb-4">Votes : {idea.votes}</p>
            <Link
              href={`/idees/${idea.id}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Voir l’idée
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/idees"
          className="inline-block bg-black text-white px-6 py-3 rounded"
        >
          Voir toutes les idées
        </Link>
      </div>
    </section>
  );
}
