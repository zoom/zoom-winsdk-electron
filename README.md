# Zoom SDK Electron on Windows

This is a basic version to support Electron framework. 

Please use the following steps to get the sample app setup and running.

Install python 2.7.x and setuptools
Install nodejs v8.12.0 32bits
https://nodejs.org/download/release/v8.12.0/node-v8.12.0-x86.msi

Install Electron

npm install –g electron

npm install –g –arch=ia32 electron-prebuilt

The addon is built by VS2015, if you are not using VS2015 or windows 10, please install x86 crt library of VS2015: vcredist_x86.exe

Copy zoom_electron to local directory

Download the latest Zoom windows SDK (https://github.com/zoom/zoom-sdk-windows)

Unzip zoom sdk package, copy contents under “bin” to zoom_electron\lib\node_modules\zoomsdk\build\Release

Run “cmd” as admin, cd to zoom_electron/demo

Run npm set npm_config_arch is32

Run Electron - on windows, its "electron ."

## Disclaimer

**Please be aware that all hard-coded variables and constants shown in the documentation and in the demo, such as Zoom Token, Zoom Access, Token, etc., are ONLY FOR DEMO AND TESTING PURPOSES. We STRONGLY DISCOURAGE the way of HARDCODING any Zoom Credentials (username, password, API Keys & secrets, SDK keys & secrets, etc.) or any Personal Identifiable Information (PII) inside your application. WE DON’T MAKE ANY COMMITMENTS ABOUT ANY LOSS CAUSED BY HARD-CODING CREDENTIALS OR SENSITIVE INFORMATION INSIDE YOUR APP WHEN DEVELOPING WITH OUR SDK**.

## Support

For any issues regarding our SDK, please visit our new Community Support Forum at https://devforum.zoom.us/.
