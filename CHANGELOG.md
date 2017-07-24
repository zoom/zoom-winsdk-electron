# CHANGELOG

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
