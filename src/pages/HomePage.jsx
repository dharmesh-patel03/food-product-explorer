import { useEffect, useState, Suspense, lazy } from "react";
import SkeletonLoader from "../components/SkeletonLoader";
import Searchbar from "../components/Searchbar";
import FilterAndSorting from "../components/FilterAndSorting";
// import ProductCard from "../components/ProductCard";

const ProductCard = lazy(() => import("../components/ProductCard"));

function HomePage() {
  const [products, setProducts] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [searchQuery, setSearchQuery] = useState("");
  const [barcode, setBarcode] = useState("");
  const [category, setCategory] = useState("snacks");
  const [sortOption, setSortOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pageNumber, setPageNumber] = useState(20)

  //useeffect for search 
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      let url = searchQuery
        ? `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchQuery}&json=true`
        : `https://world.openfoodfacts.org/search.json?page_size=${pageNumber}&category=${category}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(searchQuery)
        console.log("Fetched URL:", url);
        console.log("Data:", data);

        if (data.products) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchProducts, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, pageNumber, category]);

  // use effect for sorting

  useEffect(() => {
    if (products.length > 0) {
      const sortedProducts = sortProducts(products, sortOption);
      setProducts(sortedProducts);
    }
  }, [sortOption]);


  const handleBarcodeSearch = async () => {
    if (!barcode) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
      const data = await response.json();
      if (data.status === 1) {
        setProducts([data.product]); // Show only the searched product
      } else {
        setError("Barcode not found.");
        setProducts([]);
      }
    } catch (error) {
      setError("Error fetching barcode product.");
    } finally {
      setLoading(false);
    }
  };
  // console.log(products)
  const handlePageNumber = () => {
    setPageNumber(pageNumber + 20);
    // console.log(pageNumber)
  }

  const sortProducts = (products, option) => {
    if (!option) return products;

    return [...products].sort((a, b) => {
      if (option === "name_asc") {
        return (a.product_name || "").localeCompare(b.product_name || "");
      } else if (option === "name_desc") {
        return (b.product_name || "").localeCompare(a.product_name || "");
      } else if (option === "nutrition_asc") {
        return (a.nutrition_grades || "e").localeCompare(b.nutrition_grades || "e");
      } else if (option === "nutrition_desc") {
        return (b.nutrition_grades || "e").localeCompare(a.nutrition_grades || "e");
      } else if (option === "calories_low") {
        return (a.nutriments?.energy_kcal_100g || 99999) - (b.nutriments?.energy_kcal_100g || 99999);
      } else if (option === "calories_high") {
        return (b.nutriments?.energy_kcal_100g || 0) - (a.nutriments?.energy_kcal_100g || 0);
      }
      return 0;
    });
  };


  return (
    <div className="container mt-12  mx-auto p-4 bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-4">Food Products</h1>
      <Searchbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        barcode={barcode}
        setBarcode={setBarcode}
        handleBarcodeSearch={handleBarcodeSearch}
      />
      {/* Filters & Sorting */}
      <FilterAndSorting
        category={category}
        setCategory={setCategory}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      {/* Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      <Suspense fallback={<p className="text-center">Loading Products...</p>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.length > 0 ? (
            products.map((product) => <ProductCard key={product.code} product={product} />)
          ) : (
            !loading && <p className="text-center">No products found</p>
          )}
        </div>
      </Suspense>

      {loading && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {[...Array(8)].map((_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </div>}

      <div>
        <button className="btn   mt-4 block m-auto rounded-sm px-3  p-2 transition-all duration-300  py-2 font-semibold  duration 
             bg-white/20 backdrop-blur-md border border-white/30 
             dark:bg-gray-800/30 dark:border-gray-700/50 
             text-black dark:text-white shadow-lg hover:shadow-xl 
             hover:scale-75 active:scale-95  cursor-pointer" onClick={handlePageNumber}>Load More</button>
      </div>
    </div>
  );
}

export default HomePage;