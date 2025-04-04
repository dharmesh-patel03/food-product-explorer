import React from 'react'

const Searchbar = ({ searchQuery, setSearchQuery, barcode, setBarcode, handleBarcodeSearch }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search for food products..."
                className="w-full p-2 border rounded-md bg-[var(--card-bg)] text-[var(--text-color)] border-[var(--border-color)]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Barcode Input */}
            <input
                type="text"
                placeholder="Enter Barcode..."
                className="w-full p-2 border rounded-md bg-[var(--card-bg)] text-[var(--text-color)] border-[var(--border-color)]"
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
            />

            {/* Search Button */}
            <button
                onClick={handleBarcodeSearch}
                className="px-6 py-2 rounded-lg font-semibold transition-all duration-300 
             bg-white/20 backdrop-blur-md border border-white/30 
             dark:bg-gray-800/30 dark:border-gray-700/50 
             text-black dark:text-white shadow-lg hover:shadow-xl 
             hover:scale-75 active:scale-95 sm:w-1/3 cursor-pointer md:w-fit"
             
            >
                Search
            </button>


        </div>

    )
}

export default Searchbar