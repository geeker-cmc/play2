var htmlWebpackPlugin=require("html-webpack-plugin");
var extractTextPlugin=require("extract-text-webpack-plugin");
module.exports={
	plugins:[new extractTextPlugin("[hash]-bundle.css"),
	new htmlWebpackPlugin({
		template:"./index.html"
	})],
	entry:{
		main:"./main.js"
	},
	output:{
		path:"./build/",
		filename:"[hash]-bundle.js"
	},
	module:{
		loaders:[
//		{
//			test:/\.less$/,
//			loader:"style!css!less"
//		},
//		{
//			test:/\.css$/,
//			loader:"style!css"
//		},
		{
			test:/\.(css|less)$/,
			loader:extractTextPlugin.extract("css!less")
		},
		{
			test:/\.html$/,
			loader:"html"
		},
		{
			test:/\.(png|gif|jpg)$/,
			loader:"file-loader?name=img/[name].[ext]"
		}
		]
	},
	resolve:{
		extensions:["",".js",".less",".css"]
		
	}
}
