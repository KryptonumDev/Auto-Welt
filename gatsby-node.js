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
      path: `/kolekcje-modeli/${node.slug}/`,
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
  `);

  wystawyData.data.allWpWystawa.edges.map(({ node }) => {
    createPage({
      path: `/wystawy/${node.slug}/`,
      component: require.resolve(
        "./src/components/Templates/TemplateExhibitions/TemplateExhibitions.js"
      ),
      context: {
        wystawaId: node.id,
      },
    });
  });

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
      path: `/artykuly/${node.slug}/`,
      component: require.resolve(
        "./src/components/Templates/ArticlesTemplate/ArticlesTemplate.js"
      ),
      context: {
        articleId: node.id,
      },
    });
  });

  const { data: { allWpProduct } } = await graphql(`
    {
      allWpProduct {
        nodes {
          name
          slug
          id
          databaseId
        }
      }
    } 
  `);

  allWpProduct.nodes.map((el) => {

    createPage({
      path: `/sklep/modele/MAINCATEGORY/${el.slug}/`,
      component: require.resolve(
        "./src/templates/product-page.js"
      ),
      context: {
        itemId: el.databaseId,
        id: el.id, 
        title: el.name
      }, 
    });

  });

  const { data: { allWpProductCategory } } = await graphql(`
  {
    allWpProductCategory { 
      nodes {
        id
        slug
        name
      }
    }
  }
  `);

  allWpProductCategory.nodes.map((el) => {
    createPage({
      path: `/sklep/modele/${el.slug}/`,
      component: require.resolve(
        "./src/templates/category-page.js"
      ),
      context: {
        id: el.id,
        title: el.name
      },
    });

  }); 


};

