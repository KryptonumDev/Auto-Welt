import { useEffect, useMemo, useState } from "react"

export function useFiltration(products) {
  const preFiltredProducts = useMemo(() => {
    const arr = products.map(el => {

    })
  }, [products])
  const [filtredProducts, setFiltredProducts] = useState(products)
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState({
    search: '',
    category: '',
    onlyPromotions: false,
    sort: '0',
  })

  useEffect(() => {
    setFiltredProducts(() => {
      if (!filter.search && !filter.category && !filter.onlyPromotions && filter.sort === '0') {
        return products
      }

      const preFiltredProducts = products.filter(el => {
        if (!filter.search && !filter.category && !filter.onlyPromotions) {
          return true
        }

        let isFilterAccepted = {
          search: false,
          category: false,
          onlyPromotions: false,
        }

        if (filter.search) {
          isFilterAccepted.search = el.name.toLowerCase().includes(filter.search.toLowerCase())
        } else {
          isFilterAccepted.search = true
        }

        if (filter.category) {
          el.categories.forEach(cat => {
            if (cat.name === filter.category) {
              isFilterAccepted.category = true
            }
          })
        } else {
          isFilterAccepted.category = true
        }

        if (filter.onlyPromotions) {
          isFilterAccepted.onlyPromotions = el.on_sale
        } else {
          isFilterAccepted.onlyPromotions = true
        }

        return isFilterAccepted.search && isFilterAccepted.category && isFilterAccepted.onlyPromotions
      })
      switch (filter.sort) {
        case '1':
          return preFiltredProducts.sort((a, b) => a.name > b.name ? 1 : -1)
        case '2':
          return preFiltredProducts.sort((a, b) => a.name < b.name ? 1 : -1)
        case '3':
          return preFiltredProducts.sort((a, b) => a.price - b.price)
        case '4':
          return preFiltredProducts.sort((a, b) => b.price - a.price)
        default:
          return preFiltredProducts
      }
    })
    setPage(1)
  }, [filter, products])

  return [filtredProducts, page, setPage, filter, setFilter]
} 