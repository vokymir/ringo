"use strict";
/**
 * List every change of the state of the Tournament we might want to save to Log.
 * For forgotting heads, please put a comment of the format of the previous/after data.
 */
var LogEvent;
(function (LogEvent) {
    LogEvent[LogEvent["SAVE_MATCH"] = 0] = "SAVE_MATCH";
})(LogEvent || (LogEvent = {}));
