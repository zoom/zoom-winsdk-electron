# Zoom Electron SDK on Windows

> Our brand new [Zoom Developer Community Forum](https://devforum.zoom.us/) is now online!!! Check it out! We are here to help! :D

## Disclaimer

**Please be aware that all hard-coded variables and constants shown in the documentation and in the demo, such as Zoom Token, Zoom Access, Token, etc., are ONLY FOR DEMO AND TESTING PURPOSES. We STRONGLY DISCOURAGE the way of HARDCODING any Zoom Credentials (username, password, API Keys & secrets, SDK keys & secrets, etc.) or any Personal Identifiable Information (PII) inside your application. WE DON’T MAKE ANY COMMITMENTS ABOUT ANY LOSS CAUSED BY HARD-CODING CREDENTIALS OR SENSITIVE INFORMATION INSIDE YOUR APP WHEN DEVELOPING WITH OUR SDK**.

## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
* For detailed instructions, please refer to our documentation website: [https://marketplace.zoom.us/docs/sdk/electron-support](https://marketplace.zoom.us/docs/sdk/electron-support);
* If you need support or assistance, please visit our [Zoom Developer Community Forum](https://devforum.zoom.us/);

### Prerequisites

Before you try out our SDK, you would need the following to get started:

* **A Zoom Account**: If you do not have one, you can sign up at [https://zoom.us/signup](https://zoom.us/signup).
  * Once you have your Zoom Account, sign up for a 60-days free trial at [https://marketplace.zoom.us/](https://marketplace.zoom.us/)
* **A device with Windows OS**:
  * OS: Windows XP or later. Currently Windows 10 UWP is not supported.


### Installing

Clone or download a copy of our SDK files from GitHub. After you unzipped the file, you should have the following folders:

```
.
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── bin
├── h
├── lib
├── [sdk_demo] <-- demo app is inside
└── version.txt
```
Please refer to the following steps to install and compile:

1. Install dependencies
  * Install python 2.7.x and setuptools
  * Install nodejs v8.12.0 32bits
    * https://nodejs.org/download/release/v8.12.0/node-v8.12.0-x86.msi

2. Install Electron
```
npm install –g electron

npm install –g –arch=ia32 electron-prebuilt
```

The addon is built by VS2015, if you are not using VS2015 or windows 10, please install x86 crt library of VS2015: vcredist_x86.exe

3. Copy zoom_electron to local directory

  * Download the latest Zoom windows SDK (https://github.com/zoom/zoom-sdk-windows)

  * Unzip zoom sdk package, copy contents under “bin” to zoom_electron\lib\node_modules\zoomsdk\build\Release

  * Run “cmd” as admin, cd to zoom_electron/demo

  * Run npm set npm_config_arch is32

  * Run Electron - on windows, its "electron ."


## Documentation

Please visit [[https://marketplace.zoom.us/docs/sdk/electron-support](https://marketplace.zoom.us/docs/sdk/electron-support)] for details of each features and functions.

## Versioning

For the versions available, see the [tags on this repository](https://github.com/zoom/zoom-winsdk-electron/tags).

## Change log

Please refer to our [CHANGELOG](https://github.com/zoom/zoom-winsdk-electron/blob/master/CHANGELOG.md) for all changes.

## Frequently Asked Questions (FAQ)

* :one: `Error: Module version mismatch. Expected 50, got 57.at Error (native)`:
  * Our Electron SDK requires **Node.js version 8.12.0** and if you have higher version, you will get this error message. Using **Node.js 8.12.0** will resolve this problem.
* Not finding what you want? We are here to help! Please visit our [Zoom Developer Community Forum](https://devforum.zoom.us/) for further assistance.

## Support

For any issues regarding our SDK, please visit our new Community Support Forum at https://devforum.zoom.us/.

## License

Use of this software is subject to important terms and conditions as set forth in the License file

Please refer to [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* :star: If you like our SDK, please give us a "Star". Your support is what keeps us moving forward and delivering happiness to you! Thanks a million! :smiley:
* If you need any support or assistance, we are here to help you: [Zoom Developer Community Forum](https://devforum.zoom.us/);

---
Copyright ©2019 Zoom Video Communications, Inc. All rights reserved.
