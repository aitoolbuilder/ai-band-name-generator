'use client';

import { useState } from 'react'
import axios from 'axios'
import DancingNotes from './components/DancingNotes'

export default function Home() {
  const [bandNames, setBandNames] = useState<Array<{name: string, slogan: string, meaning: string, logo: string}>>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [keyword, setKeyword] = useState<string>('')

  const generateBandNames = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get('/api/generate-name', { params: { keyword: `Describe your band: ${keyword}` } })
      if (response.data.bands && Array.isArray(response.data.bands)) {
        setBandNames(response.data.bands)
      } else {
        console.error('Unexpected response format:', response.data)
        setBandNames([{ name: 'Error: Unexpected response format', slogan: '', meaning: '', logo: '' }])
      }
    } catch (error) {
      console.error('Error generating band names:', error)
      setBandNames([{ 
        name: 'Error generating names. Please try again.',
        slogan: '',
        meaning: '',
        logo: ''
      }])
    }
    setIsLoading(false)
  }

  return (
    <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-4">AI-powered Band Name Generator</h1>
      <p className="mb-8 text-gray-300 text-sm md:text-base">
        Unleash your creativity with our AI-powered Band Name Generator! Get unique band names,
        catchy slogans, and instant logo designs tailored to your vision. Simply describe your
        band&apos;s style, and watch as our AI crafts the perfect identity for your musical journey.
        Explore endless possibilities and bring your band to life with just a click!
      </p>
      <div className="mb-4 flex flex-col sm:flex-row">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !isLoading) {
              generateBandNames();
            }
          }}
          placeholder="Describe your band"
          className="bg-gray-700 text-white px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none flex-grow mb-2 sm:mb-0"
          disabled={isLoading}
        />
        <button 
          onClick={generateBandNames} 
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-b-md sm:rounded-r-md sm:rounded-b-none flex items-center justify-center min-w-[120px]"
        >
          {isLoading ? 'Generating...' : 'Generate'}
        </button>
      </div>
      {isLoading && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2 flex items-center justify-center">
            Generating Band Names<DancingNotes />
          </h2>
          <div className="animate-pulse">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="mb-4 bg-gray-700 h-24 rounded"></div>
            ))}
          </div>
        </div>
      )}
      {Array.isArray(bandNames) && bandNames.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Generated Names:</h2>
          <ul>
            {bandNames.map((band, index) => (
              <li key={index} className="mb-4">
                <h3 className="font-bold">Name: {band.name}</h3>
                <p className="text-sm">Slogan: {band.slogan}</p>
                <p className="text-xs text-gray-400">Meaning: {band.meaning}</p>
                <div className="w-24 h-24 mx-auto my-2" dangerouslySetInnerHTML={{ __html: band.logo }} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
