import { useState } from 'react'
import LanguageTabs from './components/LanguageTabs'
import LanguageSection from './components/LanguageSection'
import './App.css'

console.log('App component loaded')

const languages = [
  { id: 'malayalam', name: 'Malayalam', flag: '🇮🇳' },
  { id: 'kannada', name: 'Kannada', flag: '🇮🇳' },
  { id: 'telugu', name: 'Telugu', flag: '🇮🇳' },
  { id: 'tamil', name: 'Tamil', flag: '🇮🇳' },
]

export default function App() {
  const [activeLanguage, setActiveLanguage] = useState('malayalam')

  return (
    <div className="app-container" style={{ display: 'flex' }}>
      <header className="app-header" style={{ display: 'block' }}>
        <h1>🌍 Language Learning</h1>
        <p>Learn Indic Languages: Alphabets & Phrases</p>
      </header>

      <LanguageTabs
        languages={languages}
        activeLanguage={activeLanguage}
        onLanguageChange={setActiveLanguage}
      />

      <main className="app-content" style={{ display: 'block' }}>
        <LanguageSection languageId={activeLanguage} />
      </main>
    </div>
  )
}
