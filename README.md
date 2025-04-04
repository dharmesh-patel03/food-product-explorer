-- initial setup
    setting up react project and tailwind css
    A theme switcher is implemented using useState and stored in localStorage so users can switch between light and dark themes.

-- Fetching Products
    When the page loads or the category/search query changes, it fetches food products from the OpenFoodFacts API using
    fetch(`https://world.openfoodfacts.org/search.json?page_size=20&category=${category}`);

-- barcode search
    using barcode
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)

--  Sorting & Filtering
    Users can:
    Sort by name (A-Z or Z-A), nutrition grade, and calories.
    Filter by food category (e.g., Snacks, Beverages, Cereals).
    Sorting is applied after the data is fetched using a utility function sortProducts.

-- Pagination
    Initially 20 products are shown.
    On clicking the "Load More" button, the pageNumber increases, and more products are fetched (in batches of 20).

-- components

    SearchBar – Handles all input fields and the barcode search button.
    ProductCard – Displays product image, name, score, and category.
    SkeletonLoader – Shows loading placeholders while data is fetching.

-- Error Handling
    If an API call fails or the barcode is not found, a clean error message is shown to the user.