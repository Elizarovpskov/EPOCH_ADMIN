:: Server Start and Restart batch for DayZ Server Controlcenter written by Crosire
:: This is just a sample edit of Crosires file for current version Control Center, made by GermanMG. You NEED to adjust the settings first!

@echo off

:: Settings:

REM Turned all the relative paths into absolute paths to resolve issues people had with "file not found" errors
REM Main directory, very important!!! ""s are inserted further down the page, no need to add them here. No trailing "\" here.
set ARMApath=D:\ARMA2
REM Set the instance number here.
set instance=6
REM build the location of BEC executable for this instance, keep the leading backslash \! Again, no ""s.
set BECpath=\@dayzcc_config\6\BattlEye Extended Controls
REM Set the port of the server here.
set port=2312
REM Set the server modlist here.
set mod=@dayz_epoch;@dayzcc;
REM 1 = Generate new vehicles, 0 = Do not generate vehicles	
set vehicles=1
REM Path to an external batch file to execute. Set it to 0 if you don't use one.
set externalbat=0

REM Your MySQL connection details - you need this to generate vehicles directly into the DB
set dbhost=127.0.0.1
set dbport=3306
set dbuser=root
set dbpass=1122334455
set dbname=dayz_epoch

:: Do not edit from here on		>>>>	HAHAHA


timeout 5
:initialize
cls
:: see if our settings are correct
echo ARMA main directory is: "D:\ARMA2\@dayzcc_config\6\"
echo ARMA BEC directory is:  "D:\ARMA2\@dayzcc_config\6\BattlEye Extended Controls"
cd /d "%ARMApath%"
echo Switched to ArmA 2 main directory:
echo %CD%
echo.
echo Killing current running server ...
taskkill /IM arma2oaserver_6.exe
echo.
if not "%externalbat%" == "0" (start %externalbat%)
echo.
if "%vehicles%" == "200" goto generate
goto start


:generate
timeout 10
echo Generating vehicles ...
"@dayzcc\perl\bin\perl.exe" -w @dayzcc\utils\vehicles2.pl --cleanup bounds
:: there are some more customization parameters possible here, like max. vehicle count etc.
echo.
echo.

:start
timeout 40
echo Starting server again ...
:: @start @dayzcc_config\1\arma2oaserver_2.exe -beta=Expansion\beta;Expansion\beta\Expansion -mod=@dayz;@dayzcc -name=DayzPrivateServer 1.7.5.1/101480\NPC-patrols\Rmod -config=@dayzcc_config\1\config.cfg -cfg=@dayzcc_config\1\basic.cfg -profiles=@dayzcc_config\1\ -port=2302 -cpuCount=2 -maxMem=2048 -exThreads=1 -noPause -noSound
:: @start @dayzcc_config\2\arma2oaserver_2.exe -beta=Expansion\beta;Expansion\beta\Expansion -mod=@DayzOrigins;@dayzcc; -name=Server -config=@dayzcc_config\2\config.cfg -cfg=@dayzcc_config\2\basic.cfg -profiles=@dayzcc_config\2 -port=2312 -cpuCount=2 -maxMem=1247 -noSound  -exThreads=1 -noPause
:: @start @dayzcc_config\2\arma2oaserver_2.exe -beta=Expansion\beta;Expansion\beta\Expansion -mod=@dayz_namalsk_@dayz;@dayz_namalsk;@dayzcc; -name=Server -config=@dayzcc_config\2\config.cfg -cfg=@dayzcc_config\2\basic.cfg -profiles=@dayzcc_config\2 -port=2312 -cpuCount=2 -maxMem=1460 -noSound -exThreads=1 -noPause
@start @dayzcc_config\6\arma2oaserver_6.exe -beta=Expansion\beta;Expansion\beta\Expansion -mod=@dayz_epoch;@dayzcc -name=Server -config=@dayzcc_config\6\config.cfg -cfg=@dayzcc_config\6\basic.cfg -profiles=@dayzcc_config\6 -port=2302 -cpuCount=2 -maxMem=1468
echo.

:start bec
timeout 30
echo starting BEC again...
cd /d "D:\ARMA2\@dayzcc_config\6\BattlEye Extended Controls"
start "" "bec_6" -f Config.cfg
echo. 
echo restart procedure completed

:: Do not edit until here		<<<<

:: Crosire, 2012. Visit "http://cc.germandayz.de"!