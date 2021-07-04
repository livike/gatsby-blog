module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Developer Blog",
    twitter: "myhandle",
    description: "My developer blog",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      }
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: `@theme-ui/preset-funk`,
        prismPreset: `prism-okaidia`
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharpe`,
  ],
};
