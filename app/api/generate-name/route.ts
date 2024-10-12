import { NextResponse } from 'next/server'
import axios from 'axios'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const keyword = searchParams.get('keyword') || ''

  try {
    console.log('Sending request to OpenAI API with keyword:', keyword)
    const response = await axios.post(`${process.env.CHAT_COMPLETIONS_ENDPOINT}`, {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a creative assistant that generates unique and inspiring band names with additional details." },
        { role: "user", content: `${keyword}. Based on this description, generate 5 creative and diverse band names. For each band name, also provide a catchy slogan, a brief meaning or backstory, and a simple SVG logo. Format the response as JSON with the following structure:
        [
          {
            "name": "Band Name",
            "slogan": "Catchy slogan",
            "meaning": "Brief meaning or backstory",
            "logo": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><!-- SVG content here --></svg>"
          },
          ...
        ]` }
      ],
      max_tokens: 2000,
      n: 1,
      temperature: 0.8,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      }
    })

    const content = response.data.choices[0].message.content;
    console.log('Received response from OpenAI API:', content)

    const cleanedContent = content.replace(/```json\n|\n```/g, '');
    let generatedBands;
    try {
      generatedBands = JSON.parse(cleanedContent);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError)
      console.log('Raw content:', content)
      return NextResponse.json({ error: 'Invalid JSON response from AI', rawContent: content }, { status: 500 })
    }

    return NextResponse.json({ bands: generatedBands })
  } catch (error) {
    console.error('Error generating band names:', error)
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', error.response?.data)
    }
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Error generating band names', details: errorMessage }, { status: 500 });
  }
}
