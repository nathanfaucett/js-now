var defineProperty = require("define_property");


var dateNow = Date.now || function now() {
        return (new Date()).getTime();
    },

    START_MS = dateNow(),

    now, performance, HR_TIME;


if (typeof(window) !== "undefined") {
    performance = window.performance || {};

    performance.now = (
        performance.now ||
        performance.webkitNow ||
        performance.mozNow ||
        performance.msNow ||
        performance.oNow ||
        function now() {
            return dateNow() - START_MS;
        }
    );

    now = function now() {
        return performance.now();
    };
} else {
    HR_TIME = process.hrtime();

    now = function now() {
        var hrtime = process.hrtime(HR_TIME);
        return (hrtime[0] * 1e3) + (hrtime[1] * 1e-6);
    };
}


defineProperty(now, "START_TIME", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: START_MS
});


module.exports = now;
