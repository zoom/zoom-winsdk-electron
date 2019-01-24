# CHANGELOG

## 2019-01-23

Changed & Fixed
* The location of zoomsdk node files from \lib\node_modules\zoomsdk\build\Release\ to \lib\windows\bin\. ------[Please modify the path in your js files if you are upgraded from the previous version. You can select the directory for your node files and dll files, please ensure they are in the same root directory]


## 2018-10-29

* Upgrade Node.js to v8.12.0 and Electron to v2.0.7

## 2018-09-11

No interface changes

## 2018-08-20

No interface changes

## 2018-07-26

The start meeting logic for API users has changed. Please read below before upgrading to this version.

### Added

1. Add new start meeting methods for AOI users

## 2018-05-22

### Added

a>add new language support(Italian Portuguese Russian)

b>support to enable or disable always show name on video

c>support to enable or disable turn off video when join meeting

## 2017-12-25

### Added

a>add more interface of setting service

zoom_setting.js

zoom_setting_audio.js

zoom_setting_video.js

zoom_setting_general.js

zoom_setting_recording.js

b>meeting service

zoom_meeting_configuration.js

zoom_meeting_info.js

zoom_meeting.js

## 2017-11-01

### Added

1.API for audio/video device management

a>zoom_sdk.js->GetSetting : function (opts)

b>zoom_setting.js->GetAudioSetting : function (opts)

GetVideoSetting : function (opts)

c>zoom_setting_audio.js->

Setting_SelectMic: function (opts)

Setting_SelectSpeaker: function (opts)

Setting_GetMicList: function ()

Setting_GetSpeakerList: function ()

d>zoom_setting_video.js->

Setting_SelectCamera : function(opts)

Setting_GetCameraList: function ()

## 2017-07-20

### Added

1. zoom_meeting_configuration.js
        MeetingConfig_SetBottomFloatToolbarWndVisibility

2. zoom_meeting_audio.js
        MeetingAudio_MuteAudio
        MeetingAudio_UnMuteAudio
        MeetingAudio_JoinVoip
        MeetingAudio_LeaveVoip
        and audio status callback
        var _audiostatuscb = clientOpts.audiostatuscb

3. zoom_meeting_video.js
        MeetingVideo_MuteVideo
        MeetingVideo_UnMuteVideo
        and video status change callback
        var _videostatuscb = clientOpts.videostatuscb || null

4. zoom_meeting.js
        meeting status, user join/leave, host change callback

        var _meetingstatuscb = clientOpts.meetingstatuscb || null
        var _meetinguserjoincb = clientOpts.meetinguserjoincb || null
        var _meetinguserleftcb = clientOpts.meetinguserleftcb || null
        var _meetinghostchangecb = clientOpts.meetinghostchangecb || null

5. supporte join meeting without login, also user join meeting api

## 2017-06-29

### Added

1. support to get Zoom annotation service:

   Annotaion_IsAnnotaionDisable

   Annotaion_StartAnnotation

   Annotaion_StopAnnotation

   Annotaion_SetTool

   Annotaion_Clear

   Annotaion_SetColor

   Annotaion_SetLineWidth

   Annotaion_Undo

   Annotaion_Redo


2. Support to get Zoom Meeting UI:

   MeetingUI_ShowChatDlg

   MeetingUI_HideChatDlg

   MeetingUI_EnterFullScreen

   MeetingUI_ExitFullScreen

   MeetingUI_SwitchToVideoWall

   MeetingUI_SwtichToAcitveSpeaker

   MeetingUI_MoveFloatVideoWnd

   MeetingUI_ShowSharingToolbar

   MeetingUI_SwitchFloatVideoToActiveSpkMod

   MeetingUI_ChangeFloatActiveSpkVideoSize

   MeetingUI_SwitchFloatVideoToGalleryMod

   MeetingUI_ShowParticipantsListWnd

   MeetingUI_ShowBottomFloatToolbarWnd

   MeetingUI_ShowJoinAudioDlg

   MeetingUI_HideJoinAudioDlg


## 2017-06-08

### Added

1. support to get Zoom meeting service and authentication service

2. support to start/join meeting
