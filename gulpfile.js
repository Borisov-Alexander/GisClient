const gulp = require("gulp");
const gulpIf = require("gulp-if");
const uglify = require("gulp-uglify");
const ngAnnotate = require("gulp-ng-annotate");
const concat = require("gulp-concat");
const scss = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const rename = require("gulp-rename");
const argv = require("yargs").argv;

const libsSrc = [
    "src/assets/libs/jquery-3.1.0.min.js",
    "src/assets/libs/material-dashboard.js",
    "src/assets/libs/material.min.js",
    "src/assets/libs/bootstrap.min.js",
    "src/assets/libs/chartist.min.js",
  "bower_components/angular/angular.min.js",
  "bower_components/angular-ui-router/release/angular-ui-router.min.js",
  "bower_components/angular-animate/angular-animate.min.js"
   
   
]

const appSrc = [
  "src/app/**/*.js"
];

const htmlSrc = [
  "src/**/*.html"
];

const stylesSrc = [
  "src/scss/app.scss"
];

const assetsSrc = [
  "src/assets/**/*.*"
];

const l10nSrc = [
  "server/localization/**/*.json"
];

const configSrc = [
  "src/config.json"
];

gulp.task("ypos-libs", () => {
  gulp.src(libsSrc)
  .pipe(concat("libs.min.js"))
  .pipe(gulp.dest("./public/"));
});

gulp.task("ypos-app", () => {
  gulp.src(appSrc)
  .pipe(concat("app.min.js"))
  .pipe(gulpIf(argv.release, ngAnnotate()))
  .pipe(gulpIf(argv.release, uglify()))
  .pipe(gulp.dest("./public/"));
});

gulp.task("ypos-html", () => {
  gulp.src(htmlSrc)
  .pipe(gulp.dest("./public/"));
});

gulp.task("ypos-styles", () => {
  var plugins = [
    autoprefixer(),
    cssnano()
  ];

gulp.src(stylesSrc)
  .pipe(scss({outputStyle: "compressed"}))
  .pipe(rename({suffix: ".min"}))
  .pipe(gulpIf(argv.release, postcss(plugins)))
  .pipe(gulp.dest("./public/assets/css"));
});

gulp.task("ypos-assets", () => {
  gulp.src(assetsSrc)
  .pipe(gulp.dest("./public/assets/"));
});

gulp.task("ypos-l10n", () => {
  gulp.src(l10nSrc)
  .pipe(gulp.dest("./public/localization/"))
})

gulp.task("ypos-config", () => {
  gulp.src(configSrc)
  .pipe(gulp.dest("./public/"))
})


gulp.task("ypos-start", ["ypos-libs", "ypos-app", "ypos-html", "ypos-styles", "ypos-assets", "ypos-l10n", "ypos-config"]);
