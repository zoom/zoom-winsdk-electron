# ZoomSDKElectron

This is a basic version to support Electron framework. Supported only on windows SDK for now. We will be extending this in the coming weeks. MAC support will be at the end of 2017

Please use the following steps to get the sample app setup and running.

Install python 2.7.x and setuptools
Install nodejs v6.10.3 32bits
https://nodejs.org/download/release/v6.10.3/node-v6.10.3-x86.msi

Install Electron

npm install –g electron

npm install –g –arch=ia32 electron-prebuilt

The addon is built by VS2015, if you are not using VS2015 or windows 10, please install x86 crt library of VS2015: vcredist_x86.exe

Copy zoom_electron to local directory

Download the latest Zoom windows SDK (https://github.com/zoom/zoom-sdk-windows)

Unzip zoom sdk package, copy contents under “bin” to zoom_electron\lib\node_modules\zoomsdk\build\Release

Run “cmd” as admin, cd to zoom_electron/demo

Run npm set npm_config_arch is32

Run Electron - on windows, its "./node_modules/.bin/electron"
      
