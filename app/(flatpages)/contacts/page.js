'use client'

import { useRouter } from 'next/navigation'

export default function About() {
  const router = useRouter()

  return <button onClick={() => router.push('/about')}>Go Back</button>
}
