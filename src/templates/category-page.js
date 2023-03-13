import React from "react"
import AllCategories from "../shop-components/all-categories"
import Hero from "../shop-components/gallery-hero"
import NewPosts from "../shop-components/new-posts"
import Divider from "../shop-components/organize-divider"

export default function Category() {
    return (
        <main>
            <Hero />
            {/* <NewArrivals /> */}
            {/* <ProductListing products={allWpProduct.nodes} /> */}
            <Divider />
            <AllCategories />
            <NewPosts />
        </main>
    )
}