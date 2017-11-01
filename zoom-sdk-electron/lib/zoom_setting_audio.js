
var ZOOMSDKMOD_4AudioSetting = require('./zoom_sdk.js')
var ZoomAudioSetting = (function () {
  var instance;
   /**
 * Zoom SDK Audio Settings Service Init
 * @param {{
 *  addon: zoom sdk module
 *  meetingstatuscb: function, The logincb method specifies a callback method to call on meeting status changed.
 * }} opts
 * @return {ZoomAudioSetting}
 */
  function init(opts) {
 
    var clientOpts = opts || {};

    // Private methods and variables
    var _addon = clientOpts.addon || null
    var _miclist = new Array();
    var _speakerlist = new Array();

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
    	/** Select mic
		   * @param {{
		   *  deviceId: String, deviceName :string ,Device&deviceName id of camera
		   * }} opts
		   * @return {ZoomSDKError}
		   */

      Setting_SelectMic: function (opts) {
      	if (_addon) {
      		var clientOpts = opts || {}
      		var deviceId = clientOpts.deviceId
      		var deviceName = clientOpts.deviceName

      		return _addon.Setting_SelectMic(deviceId, deviceName)
      	}
      	return ZOOMSDKMOD_4AudioSetting.ZoomSDKError.SDKERR_UNINITIALIZE
      },

    	/** Select Speaker
		* @param {{
		*  deviceId: String, deviceName :string ,Device&deviceName id of camera
	    * }} opts
		* @return {ZoomSDKError}
		*/

      Setting_SelectSpeaker: function (opts) {
      	if (_addon) {
      		var clientOpts = opts || {}
      		var deviceId = clientOpts.deviceId
      		var deviceName = clientOpts.deviceName
      		return _addon.Setting_SelectSpeaker(deviceId, deviceName)
      	}
      	return ZOOMSDKMOD_4AudioSetting.ZoomSDKError.SDKERR_UNINITIALIZE
      },

        /** Get Mic List
        * @return {Array device list}
        */
      Setting_GetMicList: function () {
        _miclist = []
      	if (_addon) {
            var devicelist_str = _addon.Setting_GetMicList()
            ParseDeviceList(_miclist, devicelist_str)
      	}
       
      	return _miclist
      },

       /** Get Speaker List
        * @return {Array device list}
        */
      Setting_GetSpeakerList: function () {
        _speakerlist = []
      	if (_addon) {
            var devicelist_str = _addon.Setting_GetSpeakerList()
            ParseDeviceList(_speakerlist, devicelist_str)
      	}
        return _speakerlist
       
      },
    //
  };
};
  return {
    /**
     * Get Zoom SDK Audio Setting Service Module
     * @return {ZoomSetting}
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
    ZoomAudioSetting: ZoomAudioSetting,
}