var Date_now = require("./Date_now"),
    START_TIME = Date_now(),
    HR_TIME = process.hrtime();


function now() {
    var hrtime = process.hrtime(HR_TIME);
    return (hrtime[0] * 1e3) + (hrtime[1] * 1e-6);
}


now.getStartTime = function getStartTime() {
    return START_TIME;
};


START_TIME -= now();


module.exports = now;
