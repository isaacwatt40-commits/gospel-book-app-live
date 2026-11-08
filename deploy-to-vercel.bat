@echo off
title Deploy Gospel Books App to Vercel
echo ========================================================
echo        Deploying Gospel Books App to Vercel
echo ========================================================
echo.
echo Step 1: Logging into your Vercel account...
echo (A browser window will open to confirm your login)
call npx --yes vercel login
echo.
echo Step 2: Publishing to Production...
call npx --yes vercel --prod --yes
echo.
echo ========================================================
echo   Deployment Complete! Your live website URL is above.
echo ========================================================
echo.
pause

