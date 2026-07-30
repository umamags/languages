import { useEffect, useState } from 'react'
import CharacterMatrix from './CharacterMatrix'
import SentenceSection from './SentenceSection'
import malayalamData from '../data/malayalam'
import kannadaData from '../data/kannada'
import teluguData from '../data/telugu'
import tamilData from '../data/tamil'
import './LanguageSection.css'

const languageData = {
  malayalam: malayalamData,
  kannada: kannadaData,
  telugu: teluguData,
  tamil: tamilData,
}

export default function LanguageSection({ languageId }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const selectedData = languageData[languageId]
    if (selectedData) {
      setData(selectedData)
      setLoading(false)
    } else {
      setLoading(false)
    }
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
