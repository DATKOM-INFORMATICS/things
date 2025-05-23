"use client";

export default function NewProductForm() {
  return (
    <form className="bg-white p-6 rounded-2xl shadow space-y-4">
      <div>
        <label className="block text-sm font-medium">Nom du produit</label>
        <input type="text" className="mt-1 w-full border rounded-lg p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Tagline</label>
        <input type="text" className="mt-1 w-full border rounded-lg p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea className="mt-1 w-full border rounded-lg p-2" rows={4}></textarea>
      </div>
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">Soumettre</button>
    </form>
  );
}
