import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://yyscream.github.io/",
    title: "YiYiSu's Blog",
    description: "亿壹粟的个人博客",
    author: "YiYiSu",
    profile: "https://github.com/yyscream", // 点击作者名字跳转到 GitHub
    ogImage: "default-og.jpg",
    lang: "zh-cn",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/yyscream/yyscream.github.io/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    // 1. 你的 GitHub 主页
    { name: "github", url: "https://github.com/yyscream" },
    
    // 2. 你的 Bilibili 主页 (请记得把下面的链接换成你自己的！)
    // 格式通常是 https://space.bilibili.com/你的UID
    { name: "bilibili", url: "https://space.bilibili.com/388294987" },
  ],
  shareLinks: [
    // 分享链接保持默认即可，不需要改
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});