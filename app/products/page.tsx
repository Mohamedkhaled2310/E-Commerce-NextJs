// "use client";
// import React, { useEffect, useState } from "react";
import ProductComponent from "@/components/product/ProductComponent";
import {  Product } from "@/utils/Interfaces";
import { BASE_URL } from "@/utils/Constants";

// import { useRouter } from "next/navigation";

const ProductPage: React.FC = async() => {
  // const [products, setProducts] = useState<Product[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  // const router = useRouter();


        const response = await fetch(BASE_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();


  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <p className="text-3xl font-bold">Loading...</p>
  //     </div>
  //   );
  // }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <div key={product.id}>
            <ProductComponent product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
