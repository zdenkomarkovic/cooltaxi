module.exports = {
  siteUrl: "https://www.taksinis.rs", // URL tvog sajta
  generateRobotsTxt: true, // Automatski generiše robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/"], // Blokiraj pristup određenim stranama
      },
    ],
  },
};
