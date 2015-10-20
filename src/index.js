var Date_now = Date.now || function Date_now() {
        return (new Date()).getTime();
    },

    START_TIME = Date_now(),

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
            return Date_now() - START_TIME;
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


now.getStartTime = function getStartTime() {
    return START_TIME;
};


START_TIME -= now();


module.exports = now;
