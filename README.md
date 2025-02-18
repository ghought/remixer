# Content Remix App

A simple content remixing tool using React that allows users to transform text using AI.

## Features

1. Text input area for pasting content to remix
2. Multiple remix options (buttons) like:
   - Make it funny
   - Make it professional
   - Simplify it
   - Make it poetic
3. AI-powered transformation using OpenAI API
4. Display remixed content in an output box
5. Clean, modern UI using Tailwind CSS and Shadcn UI

## Tech Stack

- React
- Tailwind CSS
- Vercel (for deployment)
- Shadcn UI (for components)
- OpenAI API (for text transformation)

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Create a `.env.local` file and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_key_here
   ```
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

## Challenges

1. Add in another AI API
2. Add a way to upoad audio files to have them transcribed
3. Click to tweet or to schedule a tweet from the output
4. Add a wayt to save the remixed output to a database
