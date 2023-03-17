const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const { createRemoteFileNode } = require("gatsby-source-filesystem")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const api = new WooCommerceRestApi({
  url: `${process.env.GATSBY_WORDPRESS_URL}/`,
  consumerKey: process.env.GATSBY_WOO_KEY,
  consumerSecret: process.env.GATSBY_WOO_SECRET,
  version: 'wc/v3'
});


exports.sourceNodes = async (
  { actions: { createNode }, createNodeId, createContentDigest, store, cache }) => {

  let products = await api.get("products")
  let categories = await api.get("products/categories")

  const processProduct = async (product, args) => {
    product.images = await Promise.all(product.images.map(async image => {
      let fileNode
      try {
        fileNode = await createRemoteFileNode({
          url: image.src,
          ...args
        })

      } catch (e) {
        console.log("e", e)
      }
      if (fileNode) {
        image.localFile___NODE = fileNode.id
        return image
      }
    }))

    const nodeId = createNodeId(`wc-product-${product.id}`)
    const nodeContent = JSON.stringify(product)

    return Object.assign({}, product, {
      id: nodeId,
      databaseId: product.id,
      parent: null,
      children: [],
      internal: {
        type: `wcProduct`,
        content: nodeContent,
        contentDigest: createContentDigest(product)
      }
    })
  }

  const processCategory = async (category, args) => {

    if (!Array.isArray(category.image)) {
      let fileNode
      try {
        fileNode = await createRemoteFileNode({
          url: category.image.src,
          ...args
        })

      } catch (e) {
        console.log("e", e)
      }
      if (fileNode) {
        category.image.localFile___NODE = fileNode.id
      }
    }

    const nodeId = createNodeId(`wc-category-${category.id}`)
    const nodeContent = JSON.stringify(category)

    return Object.assign({}, category, {
      id: nodeId,
      databaseId: category.id,
      parent: null,
      children: [],
      internal: {
        type: `wcCategory`,
        content: nodeContent,
        contentDigest: createContentDigest(category)
      }
    })
  }

  await asyncForEach(products.data, async (product) => {
    const productNode = await processProduct(product, { store, cache, createNode, createNodeId })
    createNode(productNode)
  })
  await asyncForEach(categories.data, async (category) => {
    const categoryNode = await processCategory(category, { store, cache, createNode, createNodeId })
    createNode(categoryNode)
  })

};

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

exports.createPages = async ({ actions: { createPage, createRedirect }, graphql }) => {


  const { data: { allWcProduct } } = await graphql(`
    {
      allWcProduct {
        nodes {
          name
          slug
          id
          databaseId
          categories {
            slug
          }
        }
      }
    } 
  `);

  allWcProduct.nodes.map(el => {
    createPage({
      path: `/sklep/modele/${el.categories[0].slug}/${el.slug}/`,
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

  const { data: { allWcCategory } } = await graphql(`
    {
      allWcCategory {
        nodes {
          name
          slug
          id
          count
        }
      }
    } 
  `);

  allWcCategory.nodes.map(el => {
    createPage({
      path: `/sklep/modele/${el.slug}/`,
      component: require.resolve(
        "./src/templates/category-page.js"
      ),
      context: {
        id: el.id,
        title: el.name,
        slug: el.slug
      },
    });

    // if (el.count < 1) {
    //   createRedirect({
    //     fromPath: `/sklep/modele/${el.slug}/`,
    //     toPath: '/sklep/',
    //     force: true
    //   })
    // }

  });

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


};