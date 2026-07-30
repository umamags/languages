# 🌍 Language Learning App

A React-based interactive language learning application for learning Indic scripts with audio pronunciation support.

## Features

✨ **4 Language Tabs**
- Malayalam (മലയാളം)
- Kannada (ಕನ್ನಡ)
- Telugu (తెలుగు)
- Tamil (தமிழ்)

🔤 **Section A: Character Matrix**
- Consonants × Vowel combinations
- Display in 3 languages: Native Script, English, Hindi (Devanagari)
- Click-to-play audio pronunciation for each character

🗣️ **Section B: Common Phrases**
- Organized by categories: General, Shopping, Cooking
- Each phrase includes:
  - Native script with audio
  - English translation
  - Hindi translation

🎨 **Light Theme & Responsive Design**
- Mobile-friendly interface
- Optimized for desktop, tablet, and mobile screens
- Accessible and intuitive UI

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Access the app at `http://localhost:5173/`

## Audio Setup

### Option 1: Mock Audio (Default)
For testing, mock audio files are already created.

### Option 2: Real Audio with Google Text-to-Speech

```bash
# Install gTTS
pip install gtts

# Generate real audio
python generate_audio.py
# or
npm run audio
```

## Project Structure

```
src/
├── components/           # React components
│   ├── LanguageTabs.jsx     # Tab navigation
│   ├── LanguageSection.jsx  # Main content loader
│   ├── CharacterMatrix.jsx  # Consonant-vowel grid
│   ├── SentenceSection.jsx  # Phrases by category
│   ├── AudioButton.jsx      # Click-to-play button
│   └── *.css
├── data/                 # Language data (JSON)
│   ├── malayalam.json
│   ├── kannada.json
│   ├── telugu.json
│   └── tamil.json
├── App.jsx
├── index.css            # Light theme variables
└── main.jsx
```

## Data Structure

Each language file contains consonants, vowels, and sentences with translations:

```json
{
  "consonants": [
    {"native": "ക", "en": "ka", "hi": "क", "audioId": "ml-ka"}
  ],
  "vowels": [
    {"native": "ാ", "en": "-aa", "hi": "ा", "audioId": "ml-aa"}
  ],
  "sentences": {
    "general": [...],
    "shopping": [...],
    "cooking": [...]
  }
}
```

## Extending Content

### Add More Phrases

Edit `src/data/{language}.json` and add to any category:

```json
"general": [
  {
    "native": "script here",
    "en": "English translation",
    "hi": "Hindi translation"
  }
]
```

The app will automatically:
- Generate audio file references
- Display in the appropriate category tab
- Show translations

### Add New Categories

Simply add a new key to the `sentences` object - it will automatically appear as a new tab.

## Technologies

- React 19
- Vite (build tool)
- CSS Grid/Flexbox
- Web Audio API
- gTTS (Google Text-to-Speech)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Mobile Responsive

- ✅ Desktop (full layout)
- ✅ Tablet (768px - optimized spacing)
- ✅ Mobile (480px - touch-friendly)

## Features

- ✅ 4 Indic language tabs
- ✅ Character matrix with audio
- ✅ Organized phrase library
- ✅ 3-language display (native/English/Hindi)
- ✅ Click-to-play pronunciation
- ✅ Light theme with CSS variables
- ✅ Fully responsive design
- ✅ Extensible data structure

## License

MIT

---

**Learn Indic Scripts with Audio! 🎓🔊**
