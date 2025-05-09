import gulp from "gulp";
import imagemin from "gulp-imagemin";
import mozjpeg from "imagemin-mozjpeg";
import gifsicle from "imagemin-gifsicle";
import optipng from "imagemin-optipng";
import svgo from "imagemin-svgo";
import webp from "gulp-webp";

// Image optimization task
export const optimizeImages = () =>
  gulp
    .src("src/images/*")
    .pipe(
      imagemin([mozjpeg({ quality: 50, progressive: true }), 
      gifsicle({ interlaced: true }),
      optipng({ optimizationLevel: 7 }),
      svgo()], {
        verbose: true,
      })
    )
    .pipe(gulp.dest("./dist/images"));

// WebP image generation task
export const generateWebp = () => gulp.src("src/images/*.{jpg,png}")
                                      .pipe(webp())
                                      .pipe(gulp.dest("./dist/images"));

// Watch task
export const watch = () => {
  // gulp.watch('src/vendor/js/*.js', gulp.series(concatenateJS));
  // gulp.watch('src/js/*.js', gulp.series(concatenateJS));
  // gulp.watch('src/css/*.css', styles);
  // gulp.watch('src/vendor/css/*.css', styles);
  gulp.watch("src/images/*", gulp.series(optimizeImages, generateWebp));
};

// Default task
export default gulp.series(gulp.parallel(optimizeImages, generateWebp), watch);
