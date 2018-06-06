
var ZOOMSDKMOD_4VideoSetting = require('./zoom_sdk.js')
var ZoomVideoSetting = (function () {
  var instance;
  /**
* Zoom SDK VideoSettings Service Init
* @param {{
*  addon: zoom sdk module
* @return {ZoomVideoSetting}
*/
  function init(opts) {

    var clientOpts = opts || {};

    // Private methods and variables
    var _addon = clientOpts.addon || null
    var _cameralist = new Array();

    function ParseDeviceList(devicelist, str) {
      var devicearray = JSON.parse(str);
      devicearray.devicelist.forEach(function (item, index) {
        var deviceItem = new Object();
        deviceItem.devicename = item.devicename
        deviceItem.deviceid = item.deviceid
        deviceItem.selected = item.selected
        devicelist.push(deviceItem)
      });
    }
    return {
      /** Select Camera
       * @param {{
       *  deviceId: String, Device id of camera
       * }} opts
       * @return {ZoomSDKError}
       */
      Setting_SelectCamera: function (opts) {
        if (_addon) {
          var clientOpts = opts || {}
          var deviceId = clientOpts.deviceId
          return _addon.Setting_SelectCamera(deviceId)
        }
        return ZOOMSDKMOD_4VideoSetting.ZoomSDKError.SDKERR_UNINITIALIZE
      },

      /** Get Camera List
       * @return {Array device list}
       */
      Setting_GetCameraList: function () {
        _cameralist = []
        if (_addon) {
          var devicelist_str = _addon.Setting_GetCameraList()
          ParseDeviceList(_cameralist, devicelist_str)
        }
        return _cameralist
      },

      /** Setting Enable Video Mirror Effect
      * @param {{
      *  Enable: Enable or not
      * }} opts
      * @return {ZoomSDKError}
      */
      Setting_EnableVideoMirrorEffect: function (opts) {
        if (_addon) {
          var clientOpts = opts || {}
          var Enable = clientOpts.Enable
          return _addon.Setting_EnableVideoMirrorEffect(Enable)
        }
        return ZOOMSDKMOD_4VideoSetting.ZoomSDKError.SDKERR_UNINITIALIZE
      },

      /** Setting Enable Face Beauty Effect
      * @param {{
      *  Enable: Enable or not
      * }} opts
      * @return {ZoomSDKError}
      */
      Setting_EnableFaceBeautyEffect: function (opts) {
        if (_addon) {
          var clientOpts = opts || {}
          var Enable = clientOpts.Enable
          return _addon.Setting_EnableFaceBeautyEffect(Enable)
        }
        return ZOOMSDKMOD_4VideoSetting.ZoomSDKError.SDKERR_UNINITIALIZE
      },

      /** Check if Video Mirror Effect Enabled.
     * @return {bool}
     */
      Checking_IsVideoMirrorEffectEnabled: function (opts) {
        if (_addon) {
          return _addon.Checking_IsVideoMirrorEffectEnabled()
        }
        return false
      },

      /** Check if Face Beauty Effect Enabled.
      * @return {bool}
     */
      Checking_IsFaceBeautyEffectEnabled: function (opts) {
        if (_addon) {
          return _addon.Checking_IsFaceBeautyEffectEnabled()
        }
        return false
      },

      /** Setting Enable auto turnoff video when join meeting
       * @param {{
       *  Enable: Enable or not
       * }} opts
       * @return {ZoomSDKError}
       */
      Setting_EnableAutoTurnOffVideoWhenJoinMeeting: function (opts) {
        if (_addon) {
          var clientOpts = opts || {}
          var Enable = clientOpts.Enable
          return _addon.Setting_EnableAutoTurnOffVideoWhenJoinMeeting(Enable)
        }
        return ZOOMSDKMOD_4VideoSetting.ZoomSDKError.SDKERR_UNINITIALIZE
      },

      /** Check if auto turnoff video when join meeting enabled.
      * @return {bool}
     */
      Checking_IsAutoTurnOffVideoWhenJoinMeetingEnabled: function (opts) {
        if (_addon) {
          return _addon.Checking_IsAutoTurnOffVideoWhenJoinMeetingEnabled()
        }
        return false
      },

       /** Setting Enable always show name on video
       * @param {{
       *  Enable: Enable or not
       * }} opts
       * @return {ZoomSDKError}
       */
      Setting_EnableAlwaysShowNameOnVideo: function (opts) {
        if (_addon) {
          var clientOpts = opts || {}
          var Enable = clientOpts.Enable
          return _addon.Setting_EnableAlwaysShowNameOnVideo(Enable)
        }
        return ZOOMSDKMOD_4VideoSetting.ZoomSDKError.SDKERR_UNINITIALIZE
      },

      /** Check if always show name on video enabled.
      * @return {bool}
     */
      Checking_IsAlwaysShowNameOnVideoEnabled: function (opts) {
        if (_addon) {
          return _addon.Checking_IsAlwaysShowNameOnVideoEnabled()
        }
        return false
      },

    };

  };
  return {
    /**
     * Get Zoom SDK Video Setting Service Module
     * @return {ZoomVideoSetting}
    */
    getInstance: function (opts) {

      if (!instance) {
        instance = init(opts)
      }

      return instance
    }

  };

})();

module.exports = {
  ZoomVideoSetting: ZoomVideoSetting,
}