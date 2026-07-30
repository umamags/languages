#!/usr/bin/env python3
"""
Generate mock audio files for language learning app.
Uses gTTS (Google Text-to-Speech) to create audio files from text.

Install: pip install gtts
Usage: python generate_audio.py
"""

import os
import json
from pathlib import Path
from gtts import gTTS

# Ensure audio directory exists
AUDIO_DIR = Path("public/audio")
AUDIO_DIR.mkdir(parents=True, exist_ok=True)

# Language data mapping
LANGUAGE_CONFIG = {
    "malayalam": {
        "lang_code": "ml",
        "file": "src/data/malayalam.json"
    },
    "kannada": {
        "lang_code": "kn",
        "file": "src/data/kannada.json"
    },
    "telugu": {
        "lang_code": "te",
        "file": "src/data/telugu.json"
    },
    "tamil": {
        "lang_code": "ta",
        "file": "src/data/tamil.json"
    }
}

def generate_consonant_audio(language_id, consonants):
    """Generate audio for consonants."""
    lang_code = LANGUAGE_CONFIG[language_id]["lang_code"]

    print(f"\n📢 Generating consonant audio for {language_id.upper()}...")
    for cons in consonants:
        audio_id = cons["audioId"]
        text = cons["native"]
        filename = AUDIO_DIR / f"{audio_id}-consonant.mp3"

        if filename.exists():
            print(f"  ✓ {audio_id} (skip - exists)")
            continue

        try:
            tts = gTTS(text=text, lang=lang_code, slow=False)
            tts.save(filename)
            print(f"  ✓ {audio_id}")
        except Exception as e:
            print(f"  ✗ {audio_id} - Error: {e}")

def generate_vowel_audio(language_id, vowels):
    """Generate audio for vowel combinations (consonant + vowel)."""
    lang_code = LANGUAGE_CONFIG[language_id]["lang_code"]

    print(f"\n🔤 Generating vowel combination audio for {language_id.upper()}...")

    # Load consonants to create combinations
    with open(LANGUAGE_CONFIG[language_id]["file"], "r", encoding="utf-8") as f:
        data = json.load(f)

    consonants = data["consonants"]
    vowels = data["vowels"]

    count = 0
    for cons in consonants[:5]:  # Limit to first 5 consonants for demo
        for vowel in vowels:
            audio_id_cons = cons["audioId"]
            audio_id_vowel = vowel["audioId"]
            combined_id = f"{audio_id_cons}-{audio_id_vowel}"
            text = cons["native"] + vowel["native"]
            filename = AUDIO_DIR / f"{combined_id}.mp3"

            if filename.exists():
                continue

            try:
                tts = gTTS(text=text, lang=lang_code, slow=False)
                tts.save(filename)
                count += 1
                if count % 5 == 0:
                    print(f"  ✓ Generated {count} combinations...")
            except Exception as e:
                print(f"  ✗ {combined_id} - Error: {e}")

    print(f"  ✓ Total vowel combinations: {count}")

def generate_sentence_audio(language_id):
    """Generate audio for sentences."""
    lang_code = LANGUAGE_CONFIG[language_id]["lang_code"]

    print(f"\n🗣️  Generating sentence audio for {language_id.upper()}...")

    with open(LANGUAGE_CONFIG[language_id]["file"], "r", encoding="utf-8") as f:
        data = json.load(f)

    sentences = data["sentences"]

    count = 0
    for category, items in sentences.items():
        for idx, sentence in enumerate(items):
            audio_id = f"{language_id}-{category}-{idx}"
            text = sentence["native"]
            filename = AUDIO_DIR / f"{audio_id}.mp3"

            if filename.exists():
                continue

            try:
                tts = gTTS(text=text, lang=lang_code, slow=False)
                tts.save(filename)
                count += 1
                print(f"  ✓ {category} ({idx + 1}/{len(items)})")
            except Exception as e:
                print(f"  ✗ {audio_id} - Error: {e}")

    print(f"  ✓ Total sentences: {count}")

def main():
    """Main function."""
    print("=" * 60)
    print("🎓 Language Learning App - Audio Generator")
    print("=" * 60)

    for language_id, config in LANGUAGE_CONFIG.items():
        print(f"\n{'='*60}")
        print(f"Processing: {language_id.upper()}")
        print(f"{'='*60}")

        # Load language data
        try:
            with open(config["file"], "r", encoding="utf-8") as f:
                data = json.load(f)
        except FileNotFoundError:
            print(f"✗ File not found: {config['file']}")
            continue

        # Generate audio
        generate_consonant_audio(language_id, data["consonants"])
        generate_sentence_audio(language_id)
        # Uncomment to generate all vowel combinations (takes longer)
        # generate_vowel_audio(language_id, data["vowels"])

    print(f"\n{'='*60}")
    print(f"✅ Audio generation complete!")
    print(f"📁 Audio files saved to: {AUDIO_DIR}")
    print(f"{'='*60}\n")

if __name__ == "__main__":
    main()
