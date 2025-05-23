"use client"

import { Button } from "@/components/ui/button"

export default function ProfileHeader() {
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
        <div>
          <h1 className="text-xl font-bold">Bonjour, John Doe</h1>
          <p className="text-sm text-gray-500">Utilisateur</p>
        </div>
      </div>
      <Button variant="outline">Déconnexion</Button>
    </section>
  )
}
