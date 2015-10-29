module.exports = Date.now || function Date_now() {
    return (new Date()).getTime();
};
