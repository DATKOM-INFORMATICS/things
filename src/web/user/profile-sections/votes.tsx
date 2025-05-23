"use client"

import { Card, CardContent } from "@/components/ui/card"

const votedIdeas = [
  { id: 3, title: "Un mode offline", votes: 30 },
]

export default function UserVotes() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Mes votes</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {votedIdeas.map((idea) => (
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
