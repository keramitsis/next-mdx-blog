import authorAvatar from "../../public/images/author/christo.webp";
export const siteConfig = {
  name: "Christo's Blog",
  description:
    "TODO: Christo's Blog is a simple implementation of a markdown static blog. Built with Next.js 14 and velite js.",
  author: "Christo",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/keramitsis",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
};

export type SiteConfig = typeof siteConfig;
