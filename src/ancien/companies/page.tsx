import Header from "@/components/web/header";
import AllEntreprisesSection from "@/ancien/siteweb/Entreprises/AllEntreprisesSection";


export default function AllEntreprisesPage() {
  return (
    <>
      <Header />
      <main className="px-12">
        <AllEntreprisesSection />
      </main>
    </>
  );
}
