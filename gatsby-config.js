// gatsby-config.js
module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`
	},
	plugins: [
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-react-helmet-async`,
		{
			resolve: 'gatsby-plugin-next-seo',
			options: {
			  title: 'Cotijas Taco Shop',
			  titleTemplate: 'Cotijas Taco Shop | %s ',
			  description: 'Cotijas Taco Shop is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido.',
			  canonical: 'https://www.thatmexicanplace.net/',
			  defaultOpenGraphImageHeight: 1200,
			  defaultOpenGraphImageWidth: 1200,
	  //        mobileAlternate: {
	  //          media: 'only screen and (max-width: 640px)',
	  //          href: 'https://m.canonical.ie',
	  //        },
	  //        languageAlternates: [
	  //          {
	  //            hrefLang: 'de-AT',
	  //            href: 'https://www.canonical.ie/de',
	  //          },
	  //        ],
			  openGraph: {
				type: 'website',
				locale: 'en_US',
				url: 'https://www.thatmexicanplace.net',
				title: 'Cotijas Taco Shop',
				description: 'Cotijas Taco Shop is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido.',
				images: [
				  {
					url: 'https://www.thatmexicanplace.net/logo/logo.png',
					width: 800,
					height: 600,
					alt: 'Cotijas Taco Shop Logo',
				  },
				],
				site_name: 'Cotijas Taco Shop',
			  },
			  twitter: {
				handle: '@thatmexicanplace',
				site: '@thatmexicanplace',
				cardType: 'summary_large_image',
			  },
	  //        facebook: {
	  //          appId: '1234567890',
	  //        },
			},
		  },		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
			  host: 'https://www.thatmexicanplace.net',
			  sitemap: 'https://www.thatmexicanplace.net/sitemap.xml',
			  policy: [{ userAgent: '*', allow: '/' }]
			}
		  }, 
		  {
			resolve: `gatsby-plugin-manifest`,
			options: {
			  name: `Cotijas Taco Shop`,
			  short_name: `Cotijas Taco Shop`,
			  description: `Cotijas Taco Shop is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido`,
			  start_url: `/`,
			  lang: `en`,
			  background_color: `#e53e3e`,
			  theme_color: `#2f855a`,
			  display: `minimal-ui`,
			  icon: `src/images/cotijas-taco-shop-logo-noBG-square-250x.png`, // This path is relative to the root of the site.
			},
		  },
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
