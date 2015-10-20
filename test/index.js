var tape = require("tape"),
    now = require("..");


tape("now() -> Number", function(assert) {
    var startTime = now.getStartTime(),
        test = now(),
        actual = (new Date()).getTime() - startTime;

    if ((test - 1) > actual || (test + 1) < actual) {
        assert.equal(test, actual, "should be close to (new Date()).getTime()");
    } else {
        assert.equal(true, true, "should be close to (new Date()).getTime()");
    }

    assert.end();
});
