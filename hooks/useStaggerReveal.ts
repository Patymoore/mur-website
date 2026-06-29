"use client"

import { useEffect, useRef } from "react"

interface StaggerRevealOptions {
  /** Class of the child elements to reveal, without the leading dot. */
  childClass: string
  /** Delay between each child becoming visible, in ms. */
  stagger?: number
  /** IntersectionObserver threshold. */
  threshold?: number
}

/**
 * Reveals child elements with a staggered animation when the section
 * scrolls into view. Adds the `visible` class to each child matching
 * `childClass`. Replaces the per-component IntersectionObserver boilerplate.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLElement>({
  childClass,
  stagger = 200,
  threshold = 0.1,
}: StaggerRevealOptions) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const timeouts: ReturnType<typeof setTimeout>[] = []

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const children = entry.target.querySelectorAll(`.${childClass}`)
          children.forEach((child, index) => {
            timeouts.push(
              setTimeout(() => child.classList.add("visible"), index * stagger),
            )
          })
          observer.unobserve(entry.target)
        })
      },
      { threshold },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      timeouts.forEach(clearTimeout)
    }
  }, [childClass, stagger, threshold])

  return ref
}
