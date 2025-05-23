"use client"


import { useEffect, useRef } from "react"
import { ProductCard } from "./productcard"

export function ProductCarousel({ products }: { products: string[] }) {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return

    let scrollAmount = 0
    const interval = setInterval(() => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0
        scrollAmount = 0
      } else {
        scrollAmount += 1.5
        el.scrollLeft = scrollAmount
      }
    }, 16)

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={carouselRef} className="flex overflow-x-auto gap-4 py-24 px-6 no-scrollbar">
      {products.map((product) => (
        <ProductCard key={product} title={product} />
      ))}
    </div>
  )
}
