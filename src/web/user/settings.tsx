"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SettingsPage() {
  return (
    <main className="p-6 max-w-2xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Paramètres du compte</h1>

      <section className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nom</label>
          <Input placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input placeholder="johndoe@mail.com" />
        </div>
        <Button className="mt-4">Enregistrer</Button>
      </section>
    </main>
  )
}
