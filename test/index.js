var tape = require("tape"),
    now = require("..");


tape("now() -> Number", function(assert) {
    var test = now.START_TIME + now(),
        actual = (new Date()).getTime();

    if ((test - 5000) > actual || (test + 5000) < actual) {
        assert.equal(test, actual, "should be close to (new Date()).getTime()");
    } else {
        assert.equal(true, true, "should be close to (new Date()).getTime()");
    }

    assert.end();
});
