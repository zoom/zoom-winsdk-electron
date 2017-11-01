
var ZOOMSDKMOD_4VideoSetting = require('./zoom_sdk.js')
var ZoomVideoSetting = (function () {
  var instance;
   /**
 * Zoom SDK VideoSettings Service Init
 * @param {{
 *  addon: zoom sdk module
 *  meetingstatuscb: function, The logincb method specifies a callback method to call on meeting status changed.
 * }} opts
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
      Setting_SelectCamera : function(opts) {
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
    //
  };
};
  return {
    /**
     * Get Zoom SDK Video Setting Service Module
     * @return {ZoomVideoSetting}
    */
    getInstance: function (opts) {
 
      if ( !instance ) {
        instance = init(opts)
      }
 
      return instance
    }
 
  };
 
})();

module.exports = {
    ZoomVideoSetting: ZoomVideoSetting,
}