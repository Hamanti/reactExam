import Product from "../components/Product/Product";
import Search from "../components/Search/Search";
import { products } from "../data";
import { useState } from "react";
import Filters from "../components/Filters/Filters";

export default function CatalogPage() {

    const [query, setQuery] = useState("")
    const [sorting, setSorting] = useState('default')


    const onSortingChange = (event) => {
        setSorting(event.target.value)
    }

    const onChangeQuery = (event) => {
        setQuery(event.target.value)
    }

    const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(query.toLocaleLowerCase())
    )


    const sortProducts = (sorting, products) => {

        switch (sorting) {
            case 'priceAscending':
                return [...products].sort((a, b) => a.price.localeCompare(b.price))
            case 'priceDescending':
                return [...products].sort((a, b) => b.price.localeCompare(a.price))
            case 'nameA':
                return [...products].sort((a, b) => a.title.localeCompare(b.title))
            case 'nameZ':
                return [...products].sort((a, b) => b.title.localeCompare(a.title))
            default:
                return products
        }

    }

    const fullSorting = sortProducts(sorting, filteredProducts)

    return (
        <>
            <div className="hello">
                <h1>Catalog</h1>
                <h2>This is the catalog page on the site</h2>
            </div>

            <div className="settings">
                <Search query={query} onChangeQuery={onChangeQuery} />

                <Filters sorting={sorting} onSortingChange={onSortingChange} />
            </div>

            <div className="catalog">
                {
                    fullSorting.length ? (
                        fullSorting.map((product, index) => (
                            <Product key={index} {...product} />
                        ))
                    ) : (
                        <h2>По вашему запросу `{query}` ничего не найдено!</h2>
                    )}
            </div>
        </>
    )
}