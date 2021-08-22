const path = require("path");
const withPWA = require("next-pwa");

module.exports = withPWA({
	pwa: {
		disable: process.env.NODE_ENV === "development",
		// dest: 'public',
		register: true,
		sw: "/sw.js",
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},

	 

	env: {
		JWT_SECRET: "bjdggfuqgkjsnjbcjhadybd",
		SENDGRID_KEY: "SG.........",
		CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dwho2bgom",
		CLOUDINARY_VIDEO_URL: "https://api.cloudinary.com/v1_1/dwho2bgom",
		STRIPE_SECRET_KEY: "sk_test_51JNGIpDjTbVyjR6CTHGZqQv0VYRJt9SjdNlz5JulX9k9liqQhkxg67Novx4bjerkn4EhXPcWPmMatE7hz1RdSwHp00VckGngnQ",
		STRIPE_PUBLISHABLE_KEY: "pk_test_51JNGIpDjTbVyjR6CjYLmsTeXnjWzppSy9ycXLtU4opZvstelghQcQfunkp6af4icgmkzWyo5B1kQakhnjCpqDBIA003xWWjU6C",
	},
});

module.exports = {
	target: "serverless"
  };
