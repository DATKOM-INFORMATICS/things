import { Button } from "@/components/ui/button";

export default function FilterBar({ view, setView }: any) {
  return (
    <div className="fixed top-[64px] left-0 right-0 z-20 backdrop-blur border-b border-gray-200 px-4 py-2 flex items-center gap-4">
      <Button >Type</Button>
      <Button >Catégorie</Button>
      <Button >Zone</Button>
      <Button >Page 1</Button>

      <div className="ml-auto flex gap-2">
        <Button
          size="sm"
          variant={view === "grid" ? "default" : "outline"}
          onClick={() => setView("grid")}
        >
          Grille
        </Button>
        <Button
          size="sm"
          variant={view === "carousel" ? "default" : "outline"}
          onClick={() => setView("carousel")}
        >
          Carrousel
        </Button>
      </div>
    </div>
  );
}
