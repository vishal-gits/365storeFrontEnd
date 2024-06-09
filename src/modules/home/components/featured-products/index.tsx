import { Region } from "@medusajs/medusa"

import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  // console.log(collections)

  const sortedCollections = collections
    .sort((a, b) => (b.products.length > a.products.length ? 1 : -1))
    .slice(0, 3)
  // console.log(sortedCollections)

  return sortedCollections.map((collection) => (
    <li key={collection.id}>
      <ProductRail collection={collection} region={region} />
    </li>
  ))
}
