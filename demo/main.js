// ./app/main.js

'use strict';
const electron = require('electron');

var ZOOMSDKMOD = require("../lib/zoom_sdk.js")
var initoptions={
    path:'../lib/node_modules/zoomsdk/build/Release/',
    apicallretcb:apicallresultcb,
    threadsafemode:0,
    ostype:ZOOMSDKMOD.ZOOM_TYPE_OS_TYPE.WIN_OS,
}
const zoomsdk = ZOOMSDKMOD.ZoomSDK.getInstance(initoptions)
var zoomauth = null
var zoommeeting = null
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;
var loginWindow = null;
var startjoinWindow = null;
var waitingWindow = null;
var inmeetingWindow = null;

function showAuthwindow(){
  if (!mainWindow)
  {
    mainWindow = new BrowserWindow({ width: 580, height: 300 });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
  }
  if (loginWindow){
    loginWindow.close();
    loginWindow = null;
  }
  if (startjoinWindow){
    startjoinWindow.close();
    startjoinWindow = null;
  }
  if (waitingWindow){
    waitingWindow.close();
    waitingWindow = null;
  }
  if (inmeetingWindow){
    inmeetingWindow.close();
    inmeetingWindow = null;
  }
}

function showLoginWindow(){
  if (!loginWindow)
  {
    loginWindow = new BrowserWindow({ width: 580, height: 300 });
    loginWindow.loadURL('file://' + __dirname + '/login.html');
  }
  if (mainWindow){
    mainWindow.close();
    mainWindow = null;
  }
  if (startjoinWindow){
    startjoinWindow.close();
    startjoinWindow = null;
  }
  if (waitingWindow){
    waitingWindow.close();
    waitingWindow = null;
  }
  if (inmeetingWindow){
    inmeetingWindow.close();
    inmeetingWindow = null;
  }
}

function showSatrtJoinWindow(){
  if (!startjoinWindow)
  {
    startjoinWindow = new BrowserWindow({ width: 580, height: 300 });
    startjoinWindow.loadURL('file://' + __dirname + '/start_join.html'); 
  }
  if (mainWindow){
    mainWindow.close();
    mainWindow = null;
  }
  if (loginWindow){
    loginWindow.close();
    loginWindow = null;
  }
  if (waitingWindow){
    waitingWindow.close();
    waitingWindow = null;
  }
  if (inmeetingWindow){
    inmeetingWindow.close();
    inmeetingWindow = null;
  }
}

function showWaitingWindow(){
  if (!waitingWindow)
  {
    waitingWindow = new BrowserWindow({ width: 580, height: 300 });
    waitingWindow.loadURL('file://' + __dirname + '/waiting.html');
  }
  if (mainWindow){
    mainWindow.close();
    mainWindow = null;
  }
  if (loginWindow){
    loginWindow.close();
    loginWindow = null;
  }
  if (startjoinWindow){
    startjoinWindow.close();
    startjoinWindow = null;
  }
  if (inmeetingWindow){
    inmeetingWindow.close();
    inmeetingWindow = null;
  }
}

function showInMeetingWindow(){

  if (!inmeetingWindow)
  {
    inmeetingWindow = new BrowserWindow({ width: 580, height: 300 });
    inmeetingWindow.loadURL('file://' + __dirname + '/inmeeting.html');
  }
  if (mainWindow){
    mainWindow.close();
    mainWindow = null;
  }
  if (loginWindow){
    loginWindow.close();
    loginWindow = null;
  }
  if (startjoinWindow){
    startjoinWindow.close();
    startjoinWindow = null;
  }
  if (waitingWindow){
    waitingWindow.close();
    waitingWindow = null;
  }
}

function ProcSDKReady(){
  showAuthwindow()
    var options={
      authcb:sdkauthCB,
      logincb:loginretCB,
      logoutcb:null,
  }
  zoomauth = zoomsdk.GetAuth(options)
}

function apicallresultcb(apiname, ret){
  if ('InitSDK' == apiname && ZOOMSDKMOD.ZoomSDKError.SDKERR_SUCCESS == ret){
    ProcSDKReady()
  }
  else if ('CleanupSDK' == apiname){
     app.quit();
  }
}

function sdkauthCB(status){
  if (ZOOMSDKMOD.ZOOMAUTHMOD.ZoomAuthResult.AUTHRET_SUCCESS == status){
    var opts = {
      meetingstatuscb:meetingstatuscb
    }
    zoommeeting = zoomsdk.GetMeeting(opts)
    showLoginWindow();
  }
  else {
    showAuthwindow();
  }
}

function sdkauth(appkey, appsecret){
  zoomauth.SDKAuth(appkey, appsecret)
  showWaitingWindow();
}

function loginretCB(status){
  switch(status)
  {
    case ZOOMSDKMOD.ZOOMAUTHMOD.ZoomLoginStatus.LOGIN_SUCCESS:
      showSatrtJoinWindow();
    break;
    case ZOOMSDKMOD.ZOOMAUTHMOD.ZoomLoginStatus.LOGIN_PROCESSING:
      showWaitingWindow();
    break;
    case ZOOMSDKMOD.ZOOMAUTHMOD.ZoomLoginStatus.LOGIN_FAILED:
      showLoginWindow();
    break;
    default:
    break;
  }
}
function login(username, psw){
  if (username && psw)
  {
    showWaitingWindow();
  }
  zoomauth.Login(username, psw, false);
}

function meetingstatuscb(status, errorcode) {

  switch (status)
  {
    case ZOOMSDKMOD.ZOOMMEETINGMOD.ZoomMeetingStatus.MEETING_STATUS_CONNECTING:
    case ZOOMSDKMOD.ZOOMMEETINGMOD.ZoomMeetingStatus.MEETING_STATUS_DISCONNECTING:
    case ZOOMSDKMOD.ZOOMMEETINGMOD.ZoomMeetingStatus.MEETING_STATUS_RECONNECTING:
      showWaitingWindow();
    break;
    case ZOOMSDKMOD.ZOOMMEETINGMOD.ZoomMeetingStatus.MEETING_STATUS_INMEETING:
      showInMeetingWindow();
    break
    case ZOOMSDKMOD.ZOOMMEETINGMOD.ZoomMeetingStatus.MEETING_STATUS_FAILED:
    case ZOOMSDKMOD.ZOOMMEETINGMOD.ZoomMeetingStatus.MEETING_STATUS_ENDED:
    /*
      if (ZOOMSDKMOD.ZOOMMEETINGMOD.ZoomMeetingStatus.MEETING_STATUS_FAILED == status) {
        switch (errorcode)
        {
          case ZOOMSDKMOD.ZOOMMEETINGMOD.ZoomMeetingFailCode.MEETING_FAIL_CONFLOCKED:
          .....
          {

          }
          break;
          default
          break;
        }
      }
      */
      showSatrtJoinWindow();
    break;
    default:
    break;
  }
}
function start(meetingnum){
  var opt = {
    meetingnum:meetingnum
  }
  zoommeeting.StartMeeting(opt);
}

function join(meetingnum, username){
   var opt = {
    meetingnum:meetingnum,
    username:username
  }
  zoommeeting.JoinMeeting(opt);
}

function leave(endMeeting){
    var opt = {
      endMeeting:endMeeting
    }
   zoommeeting.LeaveMeeting(opt);
}

const {ipcMain} = require('electron')
ipcMain.on('asynchronous-message', (event, arg1, arg2, arg3) => {
  if ('sdkauth' == arg1){
    sdkauth(arg2, arg3)
  }
  else if ('login' == arg1){
    login(arg2,arg3)
  }
  else if ('start' == arg1){
    start(Number(arg2))
  }
  else if ('join' == arg1){
    join(Number(arg2), arg3);
  }
  else if ('leave' == arg1){
    leave(false)
  }
  else if ('end' == arg1){
    leave(true)
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    zoomsdk.CleanupSDK();
    if (0 == initoptions.threadsafemode){
      app.quit()
    }
  }
});

app.on('ready', function () {
  var opts = {
    webdomain:'https://www.zoom.us',
    langid:ZOOMSDKMOD.ZoomSDK_LANGUAGE_ID.LANGUAGE_English,
  }
  var ret = zoomsdk.InitSDK(opts);
  if (0 == initoptions.threadsafemode && ZOOMSDKMOD.ZoomSDKError.SDKERR_SUCCESS == ret){
    ProcSDKReady()
  }
});