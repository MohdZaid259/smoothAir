import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function RouteEffects() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  useEffect(() => { document.title = pathname === '/' ? 'smoothAir | Climate Systems' : `smoothAir | ${pathname.slice(1).replaceAll('-', ' ')}` }, [pathname])
  return null
}
