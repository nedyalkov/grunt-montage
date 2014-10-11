exports.montage = (function () {

    "use strict";

    var grunt = require("grunt");

    return {
        defaults: function (test) {
            test.expect(2);
            test.equal(grunt.file.exists("tmp/defaults/montage.png"), true, "should generate a default montage.png file.");
            test.equal(grunt.file.exists("tmp/defaults/montage.css"), true, "should generage a default montage.css file.");
            test.done();
        },
        basic: function (test) {
            test.expect(2);
            test.equal(grunt.file.exists("tmp/basic/test.png"), true, "should generate a test.png file.");
            test.equal(grunt.file.exists("tmp/basic/test.css"), true, "should generage a test.css file.");
            test.done();
        },
        widthHeight: function (test) {
            test.expect(4);
            test.equal(grunt.file.exists("tmp/width_height/test.png"), true, "should generate a test.png file.");
            test.equal(grunt.file.exists("tmp/width_height/test.css"), true, "should generage a test.css file.");
            test.equal(grunt.file.read("tmp/width_height/test.css").indexOf("width: 10px; height: 20px;") > -1, true, "should set different width&height in the CSS");
            test.equal(grunt.file.read("tmp/width_height/test.css").indexOf("emoji_zzz { background-position: -10px -40px; }") > -1, true, "last image should be offsetted properly");
            // TODO: Check resulting image size.
            test.done();
        },
        customBase: function (test) {
            test.expect(5);
            test.equal(grunt.file.exists("tmp/base/base.css"), true, "should generage a base.css file.");
            test.equal(grunt.file.read("tmp/base/base.css").indexOf("display: inline-block;") > -1, true, "should add custom base rule properties to the CSS");
            test.equal(grunt.file.read("tmp/base/base.css").indexOf("text-indent: -9999px;") > -1, true, "should add custom base rule properties to the CSS");
            test.equal(grunt.file.read("tmp/base/base.css").indexOf(".emoji_zap { background-position: -32px -16px; }") > -1, true, "num 5 should be on (2, 1).");
            test.equal(grunt.file.read("tmp/base/base.css").indexOf(".emoji_zzz { background-position: -16px -32px; }") > -1, true, "last (num 8) should be on (1, 2).");
            test.done();
        },
        singleRow: function (test) {
            test.expect(2);
            test.equal(grunt.file.read("tmp/singleRow/montage.css").indexOf(".emoji_zap { background-position: -50px 0px; }") > -1, true, "num 5 should be on first row.");
            test.equal(grunt.file.read("tmp/singleRow/montage.css").indexOf(".emoji_zzz { background-position: -70px 0px; }") > -1, true, "last (num 8) should be on first row.");
            test.done();
        },
        singleCol: function (test) {
            test.expect(2);
            test.equal(grunt.file.read("tmp/singleCol/montage.css").indexOf(".emoji_zap { background-position: 0px -50px; }") > -1, true, "num 5 should on the first column.");
            test.equal(grunt.file.read("tmp/singleCol/montage.css").indexOf(".emoji_zzz { background-position: 0px -70px; }") > -1, true, "last (num 8) should on the first column.");
            test.done();
        },
    };

}());