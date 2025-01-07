import { BASE_URL } from "@/utils/Constants"; 
import { Product } from "@/utils/Interfaces";
import Image from "next/image";

interface SingleProductPageProps {
    params: Promise<{ id: string }>;
}

const SingleProductPage:React.FC<SingleProductPageProps> = async({ params }) => {
     const { id } = await params;

    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
        return <div className="text-red-500">Failed to fetch product details</div>;
    }
    
    const product = await response.json();

    return (
        <div className="h-screen flex justify-between items-center gap-6">
            {/* <div className="flex justify-center mb-6">
                <Image 
                    src={product.image} 
                    alt={product.title} 
                    height={500}
                    width={500}
                    className="w-full max-w-lg object-cover rounded-lg shadow-lg" 
                />
            </div> */}

            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
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
