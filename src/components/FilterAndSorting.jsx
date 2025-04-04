import React from 'react'

const FilterAndSorting = ({category,setCategory,sortOption,setSortOption}) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
            {/* Category Filter */}
            <select
                className="p-2 border rounded-md bg-[var(--card-bg)]"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="snacks">Snacks</option>
                <option value="beverages">Beverages</option>
                <option value="dairy-desserts">dairy-desserts</option>
                <option value="cereals">Cereals</option>
            </select>

            {/* Sorting */}
            <select
                className="p-2 border rounded-md bg-[var(--card-bg)]"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
            >
                <option value="">Sort By</option>
                <option value="name_asc">Name (A-Z)</option>
                <option value="name_desc">Name (Z-A)</option>
                <option value="nutrition_asc">Nutrition Grade (A → E)</option>
                <option value="nutrition_desc">Nutrition Grade (E → A)</option>
                <option value="calories_low">Lowest Calories</option>
                <option value="calories_high">Highest Calories</option>
            </select>
        </div>
    )
}

export default FilterAndSorting