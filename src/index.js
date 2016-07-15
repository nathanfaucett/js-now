var Date_now = Date.now || function Date_now() {
        return (new Date()).getTime();
    },
    START_TIME = Date_now(),
    HR_TIME = process.hrtime();


function now() {
    var hrtime = process.hrtime(HR_TIME);
    return (hrtime[0] * 1e3) + (hrtime[1] * 1e-6);
}


now.getStartTime = function getStartTime() {
    return START_TIME;
};

now.stamp = function stamp() {
    return START_TIME + now();
};


START_TIME -= now();


module.exports = now;
