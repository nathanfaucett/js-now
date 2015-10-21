var tape = require("tape"),
    now = require("..");


tape("now() -> Number", function(assert) {
    var testDate = new Date(now.getStartTime() + now()),
        actualDate = new Date();

    assert.equal(testDate + "", actualDate + "", "should be equal to new Date()");
    assert.end();
});
