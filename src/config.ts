import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";

export const siteConfig: SiteConfig = {
	title: "李哥的博客",
	subtitle: "示例网站",
	lang: "zh_CN", // 语言代码，例如 'en', 'zh_CN', 'ja' 等
	themeColor: {
		hue: 250,
		saturation: 14,
		lightness: 70,
		fixed: false,
	},
	banner: {
		enable: true,
		src: "assets/images/demo-banner.png", // 相对于 /src 目录，如果以 / 开头则相对于 /public 目录
		position: "center", // 等同于 object-position，仅支持 'top', 'center', 'bottom'，默认为 'center'
		credit: {
			enable: false, // 显示banner图片的署名文字
			text: "", // 要显示的署名文字
			url: "", // (可选) 原始作品或艺术家页面的链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题深度，范围 1-3
	},
	favicon: [
		// 将此数组留空以使用默认 favicon
		// {
		//   src: '/favicon/icon.png',    // favicon 路径，相对于 /public 目录
		//   theme: 'light',              // (可选) 'light' 或 'dark'，仅在有不同模式的 favicon 时设置
		//   sizes: '32x32',              // (可选) favicon 大小，仅在有不同大小的 favicon 时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		{
			name: "主页",
			url: "/",
		},
		{
			name: "归档",
			url: "/archive/",
		},
		{
			name: "关于",
			url: "/about/",
		},
		{
			name: "GitHub",
			url: "https://github.com/LigeLoveRosita/lizi-blog", // 内部链接不应包含基础路径，因为会自动添加
			external: true, // 显示外部链接图标并在新标签页打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // 相对于 /src 目录，如果以 / 开头则相对于 /public 目录
	name: "李哥",
	bio: "热爱分享，喜欢探索新技术。",
	links: [
		{
			name: "推特",
			icon: "fa6-brands:twitter", // 访问 https://icones.js.org/ 获取图标代码
			// 如果对应的图标集尚未包含，你需要安装它
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/LigeLoveRosita/lizi-blog",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景色）正在被覆盖，请查看 astro.config.mjs 文件
	// 请选择一个深色主题，因为此博客主题目前仅支持深色背景
	theme: "github-dark",
};
