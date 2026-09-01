@echo off
title NexMart Frontend
cd /d "%~dp0frontend"
echo Starting NexMart website on http://localhost:3000 ...
echo.
echo After this starts, open your browser to:
echo    http://localhost:3000
echo.
py -m http.server 3000
if errorlevel 1 python -m http.server 3000
if errorlevel 1 python3 -m http.server 3000
pause
