"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function FilterBar({ view, setView, onFilterChange, page, setPage }: any) {
  const [type, setType] = useState("Tous")
  const [categorie, setCategorie] = useState("Toutes")

  const types = ["Tous", "Accessoires", "Textiles"]
  const categories = ["Toutes", "Populaires", "Nouveaux", "Limités"]

  return (
    <div className="fixed z-30 top-20 left-0 w-full backdrop-blur bg-white/70 border-b flex items-center gap-3 px-6 py-3">
      <Button variant={view === "grid" ? "default" : "outline"} onClick={() => setView("grid")}>
        Grille
      </Button>
      <Button variant={view === "carousel" ? "default" : "outline"} onClick={() => setView("carousel")}>
        Carousel
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{type}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {types.map((item) => (
            <DropdownMenuItem key={item} onSelect={() => { setType(item); onFilterChange("type", item) }}>
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{categorie}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {categories.map((item) => (
            <DropdownMenuItem key={item} onSelect={() => { setCategorie(item); onFilterChange("categorie", item) }}>
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="outline" onClick={() => setPage((p: number) => Math.max(p - 1, 1))}>←</Button>
        <span className="text-sm">{page}</span>
        <Button variant="outline" onClick={() => setPage((p: number) => p + 1)}>→</Button>
      </div>
    </div>
  )
}
