import { useState } from 'react'
import AudioButton from './AudioButton'
import './SentenceSection.css'

export default function SentenceSection({ sentences, languageId }) {
  const categories = Object.keys(sentences)
  const [activeCategory, setActiveCategory] = useState(categories[0])

  const activeSentences = sentences[activeCategory] || []

  return (
    <div className="sentence-wrapper">
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="sentences-list">
        {activeSentences.map((sentence, idx) => (
          <div key={idx} className="sentence-card">
            <div className="sentence-native">
              <AudioButton
                text={sentence.native}
                audioPath={`/audio/${languageId}-${activeCategory}-${idx}.mp3`}
              />
              <div className="sentence-text">{sentence.native}</div>
            </div>

            <div className="sentence-translations">
              <div className="translation-row">
                <span className="translation-label">English:</span>
                <span className="translation-text">{sentence.en}</span>
              </div>
              <div className="translation-row">
                <span className="translation-label">Hindi:</span>
                <span className="translation-text">{sentence.hi}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
