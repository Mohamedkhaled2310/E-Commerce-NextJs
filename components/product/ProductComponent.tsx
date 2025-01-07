import { ProductProps } from "@/utils/Interfaces";
import Image from "next/image";
import Link from "next/link";

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-sm flex flex-col h-full">
      <div className="relative w-full h-64 mb-4">
        <Image
          src={product.image}
          alt={String(product.title)}
          layout="fill"
          objectFit="content"
          className="rounded-md w-full"
        />
      </div>
      <h2 className="text-lg font-bold mb-2">{product.title}</h2>
      <p className="text-sm text-gray-600 mb-2">Category: {product.category}</p>
      <p className="text-gray-800 font-semibold mb-2">${product.price}</p>
      <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-yellow-500 font-bold">{product.rating.rate} ⭐</span>
        <span className="text-gray-500 text-sm">
          ({product.rating.count} reviews)
        </span>
      </div>
      <Link href={`/products/${product.id}`}>
      Read More
      </Link>
    </div>
  );
};

export default ProductComponent;
