//////////////////////////////////01
// "use client";

// import supabase from '@/supabase/supabaseClient'
// import { useState } from "react";
// import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";

// export default function NewIdeaForm() {
//   //const supabase = useSupabaseClient();
//   const user = useUser();
//   const router = useRouter();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("Produit");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [type, setType] = useState("produit");
//   const [target, setTarget] = useState("");
//   const [why, setWhy] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!title || !description) {
//       setError("Merci de remplir tous les champs.");
//       return;
//     }

//     setLoading(true);

//     const { error: insertError } = await supabase.from("idees").insert([
//       {
//         title,
//         description,
//         category,
//         user_id: user?.id,
        
//         created_at: new Date().toISOString(),
//       },
//     ]);

//     setLoading(false);

//     if (insertError) {
//       setError(insertError.message);
//       toast.error("Une erreur est survenue.");
//     } else {
//       toast.success("Idée envoyée avec succès !");
//       router.push("/ideas?tab=new"); // redirection vers la liste après ajout
//     }
//   };

//   // return (
//   //   <div className="max-w-xl mx-auto p-6 mt-8 bg-white shadow-md rounded-lg">
//   //     <h1 className="text-2xl font-bold mb-4 text-gray-800">Nouvelle Idée ✨</h1>
//   //     <form onSubmit={handleSubmit} className="space-y-4">
//   //       <div>
//   //         <label className="block text-gray-700 font-medium">Titre de l’idée</label>
//   //         <input
//   //           type="text"
//   //           value={title}
//   //           onChange={(e) => setTitle(e.target.value)}
//   //           className="w-full border rounded p-2 mt-1 focus:ring focus:ring-black/20"
//   //           placeholder="Donne un nom à ton idée"
//   //         />
//   //       </div>

//   //       <div>
//   //         <label className="block text-gray-700 font-medium">Catégorie</label>
//   //         <select
//   //           value={category}
//   //           onChange={(e) => setCategory(e.target.value)}
//   //           className="w-full border rounded p-2 mt-1"
//   //         >
//   //           <option value="Produit">Produit</option>
//   //           <option value="Amélioration">Amélioration</option>
//   //           <option value="Fonctionnalité">Fonctionnalité</option>
//   //           <option value="Autre">Autre</option>
//   //         </select>
//   //       </div>

//   //       <div>
//   //         <label className="block text-gray-700 font-medium">Description</label>
//   //         <textarea
//   //           value={description}
//   //           onChange={(e) => setDescription(e.target.value)}
//   //           rows={5}
//   //           className="w-full border rounded p-2 mt-1 focus:ring focus:ring-black/20"
//   //           placeholder="Décris ton idée en détail..."
//   //         ></textarea>
//   //       </div>

//   //       {error && <p className="text-red-500 text-sm">{error}</p>}

//   //       <button
//   //         type="submit"
//   //         disabled={loading}
//   //         className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
//   //       >
//   //         {loading ? "Envoi en cours..." : "Soumettre l’idée"}
//   //       </button>
//   //     </form>
//   //   </div>
//   // );


//   return (
//     <div className="max-w-xl mx-auto p-6 mt-8 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4 text-gray-800">Nouvelle Idée ✨</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700 font-medium">Type d’idée</label>
//           <select
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             className="w-full border rounded p-2 mt-1"
//           >
//             <option value="produit">Produit</option>
//             <option value="amelioration">Amélioration</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium">Titre</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border rounded p-2 mt-1"
//             placeholder="Ex : Nouvelle appli mobile pour les étudiants"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium">Catégorie</label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full border rounded p-2 mt-1"
//           >
//             <option value="Accessoire">Accessoire</option>
//             <option value="Application">Application</option>
//             <option value="Service">Service</option>
//             <option value="Autre">Autre</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium">À qui ça s’adresse ?</label>
//           <input
//             type="text"
//             value={target}
//             onChange={(e) => setTarget(e.target.value)}
//             className="w-full border rounded p-2 mt-1"
//             placeholder="Ex : Aux étudiants sans voiture"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium">Pourquoi c’est une bonne idée ?</label>
//           <textarea
//             value={why}
//             onChange={(e) => setWhy(e.target.value)}
//             className="w-full border rounded p-2 mt-1"
//             rows={3}
//             placeholder="Partage ta vision, pourquoi ça peut cartonner..."
//           ></textarea>
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium">Description détaillée</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             rows={5}
//             className="w-full border rounded p-2 mt-1"
//             placeholder="Décris ton idée de manière précise..."
//             required
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
//         >
//           {loading ? "Envoi en cours..." : "Soumettre l’idée"}
//         </button>
//       </form>
//     </div>
//   );

// }


//////////////////////////////////02
// "use client";
// import { useState } from "react";
// import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";

// export default function NewIdeaForm() {
//   const supabase = useSupabaseClient();
//   const user = useUser();
//   const router = useRouter();

//   const [type, setType] = useState("produit");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("Accessoire");
//   const [target, setTarget] = useState("");
//   const [why, setWhy] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!user) {
//       toast.error("Vous devez être connecté pour soumettre une idée.");
//       router.push("/login");
//       return;
//     }

//     const { error } = await supabase.from("idees").insert([
//       {
//         type,
//         contenu: description,
//         auteur_id: user.id,
//         titre: title,
//         categorie: category,
//         cible: target,
//         raison: why,
//       },
//     ]);

//     setLoading(false);

//     if (error) {
//       toast.error("Erreur lors de l'envoi de l'idée.");
//       console.error(error);
//     } else {
//       toast.success("Merci pour ton idée ✨ !");
//       router.push("/ideas");
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 mt-8 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4 text-gray-800">Nouvelle Idée ✨</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700 font-medium">Type d’idée</label>
//           <select
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             className="w-full border rounded p-2 mt-1"
//           >
//             <option value="produit">Produit</option>
//             <option value="amelioration">Amélioration</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium">Titre</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border rounded p-2 mt-1"
//             placeholder="Ex : Nouvelle appli mobile pour les étudiants"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium">Catégorie</label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full border rounded p-2 mt-1"
//           >
//             <option value="Accessoire">Accessoire</option>
//             <option value="Application">Application</option>
//             <option value="Service">Service</option>
//             <option value="Autre">Autre</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium">À qui ça s’adresse ?</label>
//           <input
//             type="text"
//             value={target}
//             onChange={(e) => setTarget(e.target.value)}
//             className="w-full border rounded p-2 mt-1"
//             placeholder="Ex : Aux étudiants sans voiture"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium">Pourquoi c’est une bonne idée ?</label>
//           <textarea
//             value={why}
//             onChange={(e) => setWhy(e.target.value)}
//             className="w-full border rounded p-2 mt-1"
//             rows={3}
//             placeholder="Partage ta vision, pourquoi ça peut cartonner..."
//           ></textarea>
//         </div>

//         <div>
//           <label className="block text-gray-700 font-medium">Description détaillée</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             rows={5}
//             className="w-full border rounded p-2 mt-1"
//             placeholder="Décris ton idée de manière précise..."
//             required
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
//         >
//           {loading ? "Envoi en cours..." : "Soumettre l’idée"}
//         </button>
//       </form>
//     </div>
//   );
// }
