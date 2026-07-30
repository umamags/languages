import './CharacterMatrix.css'

export default function CharacterMatrix({ consonants, vowels, languageName }) {
  return (
    <div className="matrix-wrapper">
      <div className="matrix-scroll">
        <table className="matrix-table">
          <thead>
            <tr>
              <th className="header-consonant">Consonant</th>
              {vowels.map((vowel, idx) => (
                <th key={idx} className="header-vowel">
                  {vowel.native}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {consonants.map((cons, consIdx) => (
              <tr key={consIdx}>
                <td className="consonant-col">{cons.native}</td>
                {vowels.map((vowel, vowelIdx) => (
                  <td key={vowelIdx} className="data-cell">
                    {cons.native + vowel.native}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
