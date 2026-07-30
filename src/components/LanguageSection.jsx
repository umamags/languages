import { useState, useEffect } from 'react'
import CharacterMatrix from './CharacterMatrix'
import SentenceSection from './SentenceSection'
import './LanguageSection.css'

const languageData = {
  malayalam: () => import('../data/malayalam.json'),
  kannada: () => import('../data/kannada.json'),
  telugu: () => import('../data/telugu.json'),
  tamil: () => import('../data/tamil.json'),
}

export default function LanguageSection({ languageId }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    languageData[languageId]()
      .then((module) => {
        setData(module.default)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [languageId])

  if (loading) {
    return <div className="loading">Loading language data...</div>
  }

  if (!data) {
    return <div className="error">Failed to load language data</div>
  }

  return (
    <div className="language-section">
      <section className="section-a">
        <h2>Section A: Alphabet & Vowels</h2>
        <CharacterMatrix
          consonants={data.consonants}
          vowels={data.vowels}
          languageName={data.name}
        />
      </section>

      <section className="section-b">
        <h2>Section B: Common Phrases</h2>
        <SentenceSection
          sentences={data.sentences}
          languageId={languageId}
        />
      </section>
    </div>
  )
}
