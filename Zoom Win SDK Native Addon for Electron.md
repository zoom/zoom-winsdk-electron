# Zoom Win SDK Native Addon for Electron

## Setup

### 1. Install Node.js(32bit) [download link](https://nodejs.org/en/download/)
### 2. Install Electron
```python
npm install -g electron
npm install --g electron-prebuilt
npm install -g --arch=ia32 electron-prebuilt
npm install -g node-gyp
npm install -g bindings
npm install -save-dev electron-prebuilt
```

### 3. Create Electron project

[Quick start](https://electron.atom.io/docs/tutorial/quick-start/)


**Key Command line**
```python
npm init
npm set npm_config_arch ia32
```

**zoom sample**
```python
.\zoom_electron
```

### 4. Create Node.js Native addon project

[Quick start](https://nodejs.org/api/addons.html)

**How to build win32 x86 addon pacakge?**
```python
node-gyp rebuild -target=1.4.13 -arch=ia32 -dist-url=https://atom.io/download/atom-shell --msvs_version=2015
```
**zoom sample**
```
.\zoom_electron\node_modules\zoomsdk
```
## Package
**install package tools**
```python
npm install --save-dev electron-packager 
```
**modify main.js**
```python
"packager": "electron-packager ./app HelloWorld --all --out ./OutApp --version 1.4.0 --overwrite --icon=./app/img/icon/icon.ico"
npm run-script packager
```
