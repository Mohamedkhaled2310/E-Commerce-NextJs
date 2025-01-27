const ProductsLoading = () => {
    const ProductsLoadingArray = [1, 2, 3, 4]; // Mock data to render skeletons

    return (
        <section className="p-6  h-screen">
        <div className="flex flex-col gap-4 max-w-md mx-auto ">
                        <div className="flex items-center gap-2">
                        <input
                            type="text"
                            className="flex-1 bg-gray-300 text-gray-300 p-3 rounded-lg animate-pulse"
                        />
                        <button
                            type="submit"
                            className=" bg-gray-300 p-3 rounded-lg text-gray-300 animate-pulse"
                        >
                        Search
                        </button>
                        </div>
        </div>  

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ProductsLoadingArray.map((_, index) => (
                <div
                    key={index}
                    className=" w-full border rounded-lg shadow-lg p-4 flex flex-col gap-6 animate-pulse"
                >
                    <div className="w-full h-64 bg-gray-300 rounded-md"></div>


                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>


                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>


                    <div className="h-5 bg-gray-300 rounded w-1/4"></div>

                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/5"></div>

                    <div className="flex items-center justify-between">
                        <div className="h-5 bg-gray-300 rounded w-1/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                    </div>
                </div>
            ))}
        </div>

        </section>
    );
};

export default ProductsLoading;
