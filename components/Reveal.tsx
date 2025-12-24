"use client"

import { useRef, useState, useEffect } from 'react'

interface RevealProps {
  /**
   * The element to wrap. Each child will fade and slide into place when it enters
   * the viewport. Use multiple Reveal components to animate multiple sections.
   */
  children: React.ReactNode
  /** Optional class names applied to the wrapper element. */
  className?: string
  /**
   * Optional element type for the wrapper. Defaults to a <div>.
   */
  as?: React.ElementType
}

/**
 * Reveal component uses IntersectionObserver to detect when the wrapped content
 * enters the viewport. Once visible, it transitions from transparent and
 * translated down into full opacity and its original position.
 *
 * When prefers-reduced-motion is enabled, the content is shown immediately
 * without animation.
 */
export default function Reveal({ children, className = '', as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    // If the user prefers reduced motion, skip animations entirely
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
    }
  }, [])

  const classNames = [className, 'reveal', isVisible ? 'visible' : ''].filter(Boolean).join(' ')
  return (
    <Tag ref={ref as any} className={classNames}>
      {children}
    </Tag>
  )
}
