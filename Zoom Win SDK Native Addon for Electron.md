
# Zoom Win SDK Native Addon for Electron

## Setup

### 1. Install Node.js 8.12.0(32bit) [download link](https://nodejs.org/en/download/)

### 2. Install Electron
```python
npm install -g electron [Or use command line ‘npm install --save-dev electron@2.0.7 -g’, to specify the electron version to be 2.0.7]
npm install -g node-gypnode-gyp installnpm install -g bindings```

### 3. Install Python [download link](https://www.python.org/downloads/)

```
Need to install Python 2.7.*. Please select the option “Add python.ext to Path” while installing Python on your computer.”
```

### 4. Create Electron project[Quick start](https://electron.atom.io/docs/tutorial/quick-start/)**Key Command line**```pythonnpm initnpm set npm_config_arch ia32```**zoom sample**```python.\zoom_electron```### 5. Create Node.js Native addon project[Quick start](https://nodejs.org/api/addons.html)**How to build win32 x86 addon pacakge?**```pythonnode-gyp rebuild -target=2.0.7 -arch=ia32 -dist-url=https://atom.io/download/atom-shell --msvs_version=2015```**zoom sample**```python.\zoom_electron\lib\windows```## Package**install package tools**```pythonnpm install --save-dev electron-packager```**modify main.js**```python"packager": "electron-packager ./app HelloWorld --all --out ./OutApp --version 1.4.0 --overwrite --icon=./app/img/icon/icon.ico"npm run-script packager```
