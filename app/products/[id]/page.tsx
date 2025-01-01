import { BASE_URL } from "@/utils/Constants"; 

interface SingleProductPageProps {
    params: { id: string };
}

const SingleProductPage = async({ params }: SingleProductPageProps) => {
    const { id } = await params;

    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
        return <div className="text-red-500">Failed to fetch product details</div>;
    }
    
    const product = await response.json();

    return (
        <div className="h-screen flex justify-between items-center gap-6">
            <div className="flex justify-center mb-6">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full max-w-lg object-cover rounded-lg shadow-lg" 
                />
            </div>

            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-lg text-gray-700 mb-4">{product.description}</p>
                <p className="text-xl font-semibold text-green-600 mb-6">Price: ${product.price}</p>

                <button className="bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-600 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default SingleProductPage;
