
import CreatorDashboardLayout from "@/components/dashboard/creators/layout";
import Link from "next/link";
import ProductList from "./sections/products/list";

export default function CreatorProductsPage() {
  return (
    <CreatorDashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mes produits</h1>
        <Link href="" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">+ Nouveau produit</Link>
      </div>
      <ProductList />
    </CreatorDashboardLayout>
  );
}
