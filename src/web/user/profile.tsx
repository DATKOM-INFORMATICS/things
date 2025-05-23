"use client"

import Header from "@/components/web/header"
import ProfileHeader from "./profile-sections/header"
import UserIdeas from "./profile-sections/ideas"
import UserVotes from "./profile-sections/votes"



export default function ProfilePage() {
  return (
    <>
      <Header />
      <main className="mt-18 p-6 max-w-4xl mx-auto space-y-8">
        <ProfileHeader />
        <UserIdeas />
        <UserVotes />
      </main>

    </>
  )
}
