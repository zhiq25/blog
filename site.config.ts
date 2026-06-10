import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "zhiq",
	prologue: "认识世界",
	author: {
		name: "zhiq",
		email: "hi@zhiq.net",
		link: "https://zhiq.net"
	},
	description: "zhiq 的个人博客网站",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2026"
	},
	i18n: {
		// locales: ["zh-cn", "en", "ja"],
		locales: ["zh-cn"], // 单语言模式
		defaultLocale: "zh-cn"
	},
	pagination: {
		note: 15,
		jotting: 24
	},
	heatmap: {
		unit: "day",
		weeks: 20
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;
