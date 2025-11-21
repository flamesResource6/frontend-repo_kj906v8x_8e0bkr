import { useEffect } from 'react'

export default function GlowingCursor({ color = '#00FFA3' }) {
  useEffect(() => {
    const el = document.createElement('div')
    el.style.position = 'fixed'
    el.style.zIndex = '9999'
    el.style.pointerEvents = 'none'
    el.style.width = '24px'
    el.style.height = '24px'
    el.style.borderRadius = '50%'
    el.style.boxShadow = `0 0 60px 20px ${color}55, 0 0 120px 40px ${color}33`
    el.style.transform = 'translate(-50%, -50%)'
    el.style.mixBlendMode = 'screen'
    document.body.appendChild(el)

    const move = (e) => {
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
    }

    window.addEventListener('pointermove', move)
    return () => {
      window.removeEventListener('pointermove', move)
      el.remove()
    }
  }, [color])

  return null
}
