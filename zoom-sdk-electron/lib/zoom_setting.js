
var ZOOMSDKMOD_4Setting = require('./zoom_sdk.js')
var ZOOMSDKMOD_AudioSetting = require('./zoom_setting_audio.js')
var ZOOMSDKMOD_VideoSetting = require('./zoom_setting_video.js')
var ZoomSetting = (function () {
  var instance;
   /**
 * Zoom SDK Settings Service Init
 * @param {{
 *  addon: zoom sdk module
 *  meetingstatuscb: function, The logincb method specifies a callback method to call on meeting status changed.
 * }} opts
 * @return {ZoomSetting}
 */
  function init(opts) {
 
    var clientOpts = opts || {};

    // Private methods and variables
    var _addon = clientOpts.addon || null
    return {
      /**
        * Get Zoom SDK Audio Setting Module
        * @return {ZoomSetting}
       */
      GetAudioSetting : function (opts) {
        if (_addon){
            var clientOpts = opts || {}
            clientOpts.addon = _addon
            return ZOOMSDKMOD_AudioSetting.ZoomAudioSetting.getInstance(clientOpts)
        }

        return null
    },

    /**
        * Get Zoom SDK Video Setting Module
        * @return {ZoomSetting}
       */
      GetVideoSetting : function (opts) {
        if (_addon){
            var clientOpts = opts || {}
            clientOpts.addon = _addon
            return ZOOMSDKMOD_VideoSetting.ZoomVideoSetting.getInstance(clientOpts)
        }
        return null
    },
    //
  };
};
  return {
    /**
     * Get Zoom SDK Setting Service Module
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
  ZoomSetting: ZoomSetting,
}