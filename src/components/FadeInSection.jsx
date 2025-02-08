import { useRef, useEffect, useState } from 'react'

export default function FadeInSection({ children }) {
  const domRef = useRef(null)
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      })
    })
    if (domRef.current) observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={domRef} className={`fadeIn-section ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </div>
  )
}
