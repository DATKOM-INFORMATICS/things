"use client";
import supabase from '@/supabase/supabaseClient';
import { useState, useEffect } from "react";
import NewIdeaButton from "./btn/newIdeaBtn";

export default function AllideasSection() {
  const [activeTab, setActiveTab] = useState("ameliorations");
  const [ameliorations, setAmeliorations] = useState<any[]>([]);
  const [nouvelles, setNouvelles] = useState<any[]>([]);

  useEffect(() => {
    fetchIdees();
  }, []);

  const fetchIdees = async () => {
    const { data, error } = await supabase.from("idees").select("*");

    if (error) {
      console.error("Erreur récupération idées :", error);
    } else {
      setAmeliorations(data.filter((item) => item.type === "amelioration"));
      setNouvelles(data.filter((item) => item.type === "nouveau_produit"));
    }
  };

  return (
    <div className="pt-24 px-4">
      <h1 className="text-3xl font-bold mb-6">Toutes les idées</h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("ameliorations")}
          className={`px-4 py-2 rounded ${
            activeTab === "ameliorations"
              ? "bg-black text-white"
              : "bg-gray-100"
          }`}
        >
          Améliorations
        </button>
        <button
          onClick={() => setActiveTab("nouveaux")}
          className={`px-4 py-2 rounded ${
            activeTab === "nouveaux"
              ? "bg-black text-white"
              : "bg-gray-100"
          }`}
        >
          Nouvelles idées
        </button>
      </div>

      {activeTab === "ameliorations" ? (
        <div className="grid md:grid-cols-2 gap-4">
          {ameliorations.map((idee) => (
            <div
              key={idee.id}
              className="p-4 border rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{idee.titre}</h3>
              <p className="text-sm text-gray-600 mt-2">{idee.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {nouvelles.map((idee) => (
            <div
              key={idee.id}
              className="p-4 border rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{idee.titre}</h3>
              <p className="text-sm text-gray-600 mt-2">{idee.description}</p>
            </div>
          ))}

          <div className="fixed bottom-6 right-6">
            <NewIdeaButton />
          </div>
        </div>
      )}
    </div>
  );
}

// "use client";

//import supabase from '@/supabase/supabaseClient'
// import { useState, useEffect } from "react";
// import NewIdeaButton from "./btn/newIdeaBtn";

// export default function AllideasSection() {
//   const [activeTab, setActiveTab] = useState("ameliorations");
//   const [ameliorations, setAmeliorations] = useState<any[]>([]);
//   const [nouvelles, setNouvelles] = useState<any[]>([]);

//   useEffect(() => {
//     fetchIdees();
//   }, []);

//   const fetchIdees = async () => {
//     const { data, error } = await supabase.from("idees").select("*");

//     if (error) {
//       console.error("Erreur récupération idées :", error);
//     } else {
//       setAmeliorations(data.filter((item) => item.type === "amelioration"));
//       setNouvelles(data.filter((item) => item.type === "nouveau_produit"));
//     }
//   };

//   return (
//     <div className="pt-24 px-4">
//       <h1 className="text-3xl font-bold mb-6">Toutes les idées</h1>

//       <div className="flex gap-4 mb-6">
//         <button
//           onClick={() => setActiveTab("ameliorations")}
//           className={`px-4 py-2 rounded ${
//             activeTab === "ameliorations"
//               ? "bg-black text-white"
//               : "bg-gray-100"
//           }`}
//         >
//           Améliorations
//         </button>
//         <button
//           onClick={() => setActiveTab("nouveaux")}
//           className={`px-4 py-2 rounded ${
//             activeTab === "nouveaux"
//               ? "bg-black text-white"
//               : "bg-gray-100"
//           }`}
//         >
//           Nouvelles idées
//         </button>
//       </div>

//       {activeTab === "ameliorations" ? (
//         <div className="grid md:grid-cols-2 gap-4">
//           {ameliorations.map((idee) => (
//             <div
//               key={idee.id}
//               className="p-4 border rounded shadow hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-semibold">{idee.titre}</h3>
//               <p className="text-sm text-gray-600 mt-2">{idee.description}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="grid md:grid-cols-2 gap-4">
//           {nouvelles.map((idee) => (
//             <div
//               key={idee.id}
//               className="p-4 border rounded shadow hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-semibold">{idee.titre}</h3>
//               <p className="text-sm text-gray-600 mt-2">{idee.description}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Floating New Idea Button */}
//       <div className="fixed bottom-6 right-6">
//         <NewIdeaButton />
//       </div>
//     </div>
//   );
// }
