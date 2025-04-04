import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SkeletonProductDetail from "../components/SkeletonProductDetail";

function ProductDetailPage() {
    const { code } = useParams(); // Get product code from URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProductDetails = async () => {
            setLoading(true);
            setError("");
            try {
                const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`);
                const data = await response.json();

                if (data.status === 1) {
                    setProduct(data.product);
                } else {
                    setError("Product not found.");
                }
            } catch (err) {
                setError("Error fetching product details.");
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [code]);

    if (loading) return <SkeletonProductDetail />;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!product) return <p className="text-center">No product details available.</p>;

    return (
        <div className="w-full bg-[var(--bg-color)] py-14">
            <div className="container md:mx-auto p-10 md:p-10 bg-[var(--card-bg)] text-[var(--text-color)] md:pl-20 flex flex-col md:flex-row gap-10 shadow-2xl md:w-5/6 md:mt-10 md:rounded-4xl">
                <div className="flex items-center md:w-2/3 w-full">
                    <img
                        src={product.image_url}
                        alt={product.product_name}
                        className={product.image_url === undefined ? `hidden` : `mx-auto rounded-lg shadow-sm`} />
                </div>

                <div className="mt-4 gap-3 flex flex-col text-sm">

                    <h1 className="text-4xl  mb-4 text-center md:text-left">{product.product_name}</h1>
                    <p><strong>Barcode :</strong> <br />{product.code}(EAN / EAN-13)

                    </p>
                    <p className="text-base"><strong className="">Common Name:</strong> {product.generic_name || "N/A"}</p>
                    <p><strong>Quantity:</strong> {product.product_quantity || "N/A"}</p>
                    <p><strong>Packaging:</strong> {product.packaging || "N/A"}</p>
                    <p><strong>Brands:</strong> {product.brands || "N/A"}</p>
                    <p><strong>Categories:</strong> {product.categories || "N/A"}</p>
                    <p><strong>Ingredients:</strong> {product.ingredients_text || "N/A"}</p>
                    <p><strong>Nutrition Grade:</strong> {product.nutrition_grades || "N/A"}</p>
                    <p><strong>Energy:</strong> {product.nutriments?.energy_kcal || "N/A"} kcal</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;
