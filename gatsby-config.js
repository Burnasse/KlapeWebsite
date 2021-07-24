module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Klape",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      // The name of the plugin
      resolve: "gatsby-source-mongodb",
      options: {
        // Name of the database and collection where are books reside
        dbName: "myFirstDatabase",
        collection: "images",
        server: {
          address: "klapecluster-shard-00-02.eg00n.mongodb.net",
          port: 27017,
        },
        auth: {
          user: "Tommy",
          password: "44GGwwaazz",
        },
        extraParams: {
          replicaSet: "Main-shard-0",
          ssl: true,
          authSource: "admin",
          retryWrites: true,
        },
      },
    },
  ],
};
