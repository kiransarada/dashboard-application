var gulp = require("gulp");
var Server = require("karma").Server;

const configPath = __dirname + "/ClientApp/test/karma.conf.js";

gulp.task("test", function (done) {
    new Server({
        configFile: configPath,
        singleRun: true
    }, done).start();
});

gulp.task("tdd", function (done) {
    new Server({
        configFile: configPath,
        singleRun: false
    }, done).start();
});