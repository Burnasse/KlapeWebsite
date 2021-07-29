require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://zealous-mclean-b50936.netlify.app',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.Klape.fr",
    title: "Klape",
    titleAlt: "Klape",
    image: "",
    siteLanguage: "fr",
    ogLanguage: "fr_FR",
    description: "Antoine Mangiavacca, Photographe, Opérateur Caméra",
    shortName: "Klape",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ['auto', 'webp', 'jpg']
        },
        failOnError: false
      }
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        schemas: {
          article: require('./custom_types/article.json'),
          exposition: require('./custom_types/exposition.json')
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "locale",
        path: `${__dirname}/locales/`,
      },
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
          user: process.env.MONGODB_USER,
          password: process.env.MONGODB_PASSWORD,
        },
        extraParams: {
          replicaSet: "Main-shard-0",
          ssl: true,
          authSource: "admin",
          retryWrites: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "locale",
        languages: ["fr", "en"],
        defaultLanguage: "fr",
        siteUrl: "https://www.Klape.fr",
        i18nextOptions: {
          interpolation: {
            escapeValue: false 
          },
          keySeparator: false,
          nsSeparator: false
        },
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
};
