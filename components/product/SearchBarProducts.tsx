"use client";
import { useState } from "react";

const SearchBarProducts = () => {
    const [searchText, setSearchText] = useState("");

 
    const handleSearchQuery = (querySearch: string) => {
        console.log({ querySearch });
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        handleSearchQuery(searchText);
    };


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchText(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Enter Product Name..."
                    className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={searchText}
                    onChange={handleSearchChange}
                    aria-label="Search for products"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchBarProducts;