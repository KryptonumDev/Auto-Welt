exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const kolekcjeData = await graphql(`
    {
      allWpKolekcje {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  kolekcjeData.data.allWpKolekcje.edges.map(({ node }) => {
    createPage({
      path: `kolekcje-modeli/${node.slug}`,
      component: require.resolve(
        "./src/components/Templates/CollectionTemplate/CollectionTemplate.js"
      ),
      context: {
        kolekcjaId: node.id,
      },
    });
  });

  const wystawyData = await graphql(`
    {
      allWpWystawa {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `)

  wystawyData.data.allWpWystawa.edges.map(({ node }) => {
    createPage({
      path: `wystawy/${node.slug}`,
      component: require.resolve("./src/components/Templates/TemplateExhibitions/TemplateExhibitions.js"),
      context: {
        wystawaId: node.id
      }
    })
  })

  const artykulData = await graphql(`
    {
      allWpArtykul {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  artykulData.data.allWpArtykul.edges.map(({ node }) => {
    createPage({
      path: `artykuly/${node.slug}`,
      component: require.resolve("./src/components/Templates/ArticlesTemplate/ArticlesTemplate.js"),
      context: {
        articleId: node.id
      }
    })
  })
};
