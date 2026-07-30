#!/usr/bin/env python3
"""
Create mock MP3 files for testing.
Each file is a minimal valid MP3 (silence).
"""

import os
from pathlib import Path

# Minimal valid MP3 file (ID3v2 header + silent frame)
MINIMAL_MP3 = bytes([
    0x49, 0x44, 0x33, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  # ID3v2.4 header
    0xFF, 0xFB, 0x90, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,  # MPEG frame header (minimal)
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
])

AUDIO_DIR = Path("public/audio")
AUDIO_DIR.mkdir(parents=True, exist_ok=True)

def create_mock_audio_files():
    """Create mock audio files."""
    import json

    languages = ["malayalam", "kannada", "telugu", "tamil"]

    print("📁 Creating mock audio directory structure...")

    total_files = 0

    for lang_id in languages:
        try:
            with open(f"src/data/{lang_id}.json", "r", encoding="utf-8") as f:
                data = json.load(f)

            # Create consonant audio files
            for cons in data["consonants"]:
                filename = AUDIO_DIR / f"{cons['audioId']}-consonant.mp3"
                if not filename.exists():
                    filename.write_bytes(MINIMAL_MP3)
                    total_files += 1

            # Create sentence audio files
            for category, sentences in data["sentences"].items():
                for idx in range(len(sentences)):
                    filename = AUDIO_DIR / f"{lang_id}-{category}-{idx}.mp3"
                    if not filename.exists():
                        filename.write_bytes(MINIMAL_MP3)
                        total_files += 1

        except Exception as e:
            print(f"Error processing {lang_id}: {e}")

    print(f"✅ Created {total_files} mock audio files in {AUDIO_DIR}")
    print(f"📝 Note: These are placeholder files. For real audio:")
    print(f"   - Install: pip install gtts")
    print(f"   - Run: python generate_audio.py")

if __name__ == "__main__":
    create_mock_audio_files()
