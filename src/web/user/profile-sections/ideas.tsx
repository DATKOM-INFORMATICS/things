"use client"

import { Card, CardContent } from "@/components/ui/card"

const ideas = [
  { id: 1, title: "Refaire l'app en mode dark", votes: 12 },
  { id: 2, title: "Ajouter un système de badges", votes: 8 },
]

export default function UserIdeas() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Mes idées</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {ideas.map((idea) => (
          <Card key={idea.id}>
            <CardContent className="p-4">
              <h3 className="font-medium">{idea.title}</h3>
              <p className="text-sm text-gray-500">{idea.votes} votes</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
