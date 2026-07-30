import { useState } from 'react'
import './AudioButton.css'

export default function AudioButton({ text, audioPath }) {
  const [playing, setPlaying] = useState(false)

  const handlePlay = async () => {
    setPlaying(true)
    try {
      const audio = new Audio(audioPath)
      audio.onended = () => setPlaying(false)
      audio.onerror = () => setPlaying(false)
      await audio.play()
    } catch (error) {
      console.error('Audio playback error:', error)
      setPlaying(false)
    }
  }

  return (
    <button
      className={`audio-button ${playing ? 'playing' : ''}`}
      onClick={handlePlay}
      disabled={playing}
      title="Click to hear pronunciation"
      aria-label={`Pronounce: ${text}`}
    >
      <span className="audio-icon">🔊</span>
    </button>
  )
}
