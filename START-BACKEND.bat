@echo off
title NexMart Backend
cd /d "%~dp0backend"
echo Starting NexMart API on http://localhost:4000 ...
echo.
node src\server.js
pause
