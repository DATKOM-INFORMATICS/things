export default function UserBadges() {
  const badges = [
    { id: 1, label: "Top Idea", icon: "🌟" },
    { id: 2, label: "Community Hero", icon: "🔥" },
  ]

  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Mes badges</h2>
      <div className="flex gap-4">
        {badges.map((badge) => (
          <div key={badge.id} className="flex items-center gap-2 bg-gray-100 p-3 rounded-xl">
            <span>{badge.icon}</span>
            <span>{badge.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
