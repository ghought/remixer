'use client'

import { useState } from 'react'

const REMIX_TYPES = [
  { label: 'Make it Funny', prompt: 'Rewrite this in a humorous way' },
  { label: 'Make it Professional', prompt: 'Rewrite this in a professional tone' },
  { label: 'Simplify', prompt: 'Simplify this text to make it easier to understand' },
  { label: 'Make it Poetic', prompt: 'Transform this into poetic verse' },
]

interface RemixFormProps {
  setOutput: (text: string) => void
}

export default function RemixForm({ setOutput }: RemixFormProps) {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRemix = async (prompt: string) => {
    if (!input.trim()) return

    setLoading(true)
    try {
      const response = await fetch('/api/remix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input, prompt }),
      })
      
      const data = await response.json()
      setOutput(data.result)
    } catch (error) {
      console.error('Error:', error)
      setOutput('An error occurred while remixing the content.')
    }
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste your content here..."
        className="w-full h-40 p-4 border rounded-lg"
        disabled={loading}
      />
      <div className="flex flex-wrap gap-2">
        {REMIX_TYPES.map(({ label, prompt }) => (
          <button
            key={label}
            onClick={() => handleRemix(prompt)}
            disabled={loading || !input.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
} 