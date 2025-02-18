import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { text, prompt } = await req.json()

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a creative assistant that helps remix and transform text content."
        },
        {
          role: "user",
          content: `${prompt}:\n\n${text}`
        }
      ],
    })

    return NextResponse.json({ result: completion.choices[0].message.content })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Error processing your request' },
      { status: 500 }
    )
  }
} 