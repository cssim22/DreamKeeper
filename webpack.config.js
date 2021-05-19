const path = require("path");

module.exports = (env) => {
	return {
		entry: path.join(__dirname, "./client/index"),
		output: {
			path: path.resolve(__dirname, "build"), // Look into this maybe
			filename: "bundle.js",
		},
		mode: env.production ? "production" : "development",
		devServer: {
			publicPath: "/build/",
			proxy: { "/api/leaders": "http://localhost:3000" },
		},

		module: {
			rules: [
				{
					test: /\.jsx?/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react"],
						},
					},
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						// Creates `style` nodes from JS strings
						"style-loader",
						// Translates CSS into CommonJS
						"css-loader",
						// Compiles Sass to CSS
						"sass-loader",
					],
				},
			],
		},
	};
};
