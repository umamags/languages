import './LanguageTabs.css'

export default function LanguageTabs({ languages, activeLanguage, onLanguageChange }) {
  return (
    <nav className="tabs-container">
      <div className="tabs-list">
        {languages.map((lang) => (
          <button
            key={lang.id}
            className={`tab-button ${activeLanguage === lang.id ? 'active' : ''}`}
            onClick={() => onLanguageChange(lang.id)}
            aria-current={activeLanguage === lang.id ? 'page' : undefined}
          >
            <span className="tab-flag">{lang.flag}</span>
            <span className="tab-name">{lang.name}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
