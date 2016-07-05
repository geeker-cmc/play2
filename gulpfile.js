var gulp=require("gulp"),
	webpack=require("gulp-webpack"),
	
	webpackConfig=require("./webpack.config.js"),
	webserver=require("gulp-webserver");
	
	
	gulp.task("build",function(){
		gulp.src("./main.js").
		pipe(webpack(Object.create(webpackConfig))).
		pipe(gulp.dest("./build/"))
	})
	
	
	gulp.task("watch",function(){
		gulp.watch("./*",["build"]);
	})
	gulp.task("server",function(){
		gulp.src("./")
		.pipe(webserver({
			livereload:true,
			directoryListing:true,
			open:true
		}))
	});
	gulp.task("default",["build","watch","server"])