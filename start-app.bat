@echo off
title Gospel Books App
echo ========================================================
echo        Starting Gospel Books App (PageTurn)
echo ========================================================
echo.
echo Launching local server...
start http://localhost:5173
node server.js
pause

