#!/bin/sh
cd "$(dirname "$0")"
PORT=8765
URL="http://127.0.0.1:$PORT/"

open_browser() {
  if command -v xdg-open >/dev/null 2>&1; then
    xdg-open "$URL"
  elif command -v open >/dev/null 2>&1; then
    open "$URL"
  fi
}

if command -v python3 >/dev/null 2>&1; then
  open_browser
  exec python3 -m http.server "$PORT"
fi

if command -v python >/dev/null 2>&1; then
  open_browser
  exec python -m http.server "$PORT"
fi

echo "Python was not found. Opening the file instead."
echo "Microphone may be blocked. Use File to pick a song."
if command -v xdg-open >/dev/null 2>&1; then
  exec xdg-open "./index.html"
fi
if command -v open >/dev/null 2>&1; then
  exec open "./index.html"
fi
echo "Open index.html in your browser."
