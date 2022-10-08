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
};
