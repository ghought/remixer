'use client'

import { useState } from 'react'
import RemixForm from './components/remix-form'

export default function Home() {
  const [output, setOutput] = useState('')

  return (
    <main className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-4xl font-bold text-center mb-8">Content Remix</h1>
      <RemixForm setOutput={setOutput} />
      {output && (
        <div className="mt-8 p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Remixed Output:</h2>
          <p className="whitespace-pre-wrap">{output}</p>
        </div>
      )}
    </main>
  )
} 