import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({product}) => {
    // console.log(product)
    return (
        <Link to={`/product/${product.code}`}  className="    hover:border-4 transition-all ease-in-out duration-300 hover:scale-75 hover:shadow-2xl bg-[var(--card-bg)] p-4 shadow-md rounded-lg h-full border-4 border-transparent hover:border-blue-300">

            <div className="w-full h-36">
                <img
                    src={product.image_url === undefined ? `https://world.openfoodfacts.org/images/icons/dist/packaging.svg` : product.image_url}
                    alt={product.product_name}
                    className={product.image_url === undefined ? ` rounded h-full w-full object-contain invert-[0.9]` : `rounded h-full w-full object-contain`}
                />
            </div>

            <div className="text-lg font-semibold mt-2">
                {product.product_name}
            </div>
            {/* <div>{console.log(index + "=>" + product.environmental_score_grade || product.ecoscore_data.grade || product.environmental_score_data.grade || "not applicable")}</div> */}
            <span className="inline-flex items-center my-2 rounded-md bg-[var(--badge-bg)] px-2 py-1 text-xs font-medium text-[var(--badge-text)] ring-1 ring-[var(--badge-ring)] ring-inset uppercase">{product.environmental_score_grade}</span>
            <p className="text-gray-500 text-sm text-wrap">{product.categories}</p>
        </Link >
    )
}

export default ProductCard