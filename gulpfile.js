// подключение пакетов
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer'); // подвтавляет префиксы
const rename = require('gulp-rename'); // переименовывает файлы
const minifycss = require('gulp-cssmin'); // минифицирует css
const tinypng = require('gulp-tinypng'); // сжатие картинок



// задача
// gulp.task('NameFunc', function() {
//     return gulp.src("Folder/file.css  -Find file")
//         .pipe(someprosedure())
//         .pipe(gulp.dest("newfolder/anotherfolder -save results"))
// });

// процесс подстравления префиксов в файл css
gulp.task('css', function(){
    return gulp.src("src/css/**/*.css")
        .pipe(autoprefixer({
            browsers: ["cover 99.5%", "iOS 7"]
        }))
        .pipe(gulp.dest("app/css/"));
});
// процесс минифицирования стилевого файла style.css
gulp.task('cssmin', function() {
    return gulp.src("app/css/style.css") // берем файл из папки app/css
        .pipe(minifycss()) // мирифицируем
        .pipe(rename('style.min.css')) // переименовываем
        .pipe(gulp.dest("app/css"));
});
// процесс сжатия картинок, кол-во ограничено 500 всего
// поэтому в вотч не записываем делаем сжатие вконце проекта
gulp.task('tinypng', function(){
    gulp.src(["src/img/*.png","src/img/*.jpg"]) // если надо указать несколько файлов или папок используем массив заключенный между []
        .pipe(tingpng("dhNbtz2UkRd9APBgxi1zNQyCs976VTVo"))
        .pipe(gulp.dest("app/img"));
});

// автоматическое отслеживание и выполнение процессов при изменении
// после названия функции если есть [], то функция внутри скобок выполняется перед данной функцией
gulp.task('watch', ["css","cssmin"], function(){
    gulp.watch("src/css/**/*.css", ["css"]); // вотчим за файлами в src/css
    gulp.watch("app/css/style.css", ["cssmin"]);
});

// dhNbtz2UkRd9APBgxi1zNQyCs976VTVo mail:ggg0100@mail.ru