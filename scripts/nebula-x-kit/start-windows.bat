@echo off
setlocal
cd /d "%~dp0"

where py >nul 2>&1
if %errorlevel%==0 (
  start "" "http://127.0.0.1:8765/"
  py -m http.server 8765
  goto :eof
)

where python >nul 2>&1
if %errorlevel%==0 (
  start "" "http://127.0.0.1:8765/"
  python -m http.server 8765
  goto :eof
)

echo Python was not found, so this will open the file instead.
echo Microphone may be blocked. Use File to pick a song, or install Python and run this again.
pause
start "" "%~dp0index.html"
