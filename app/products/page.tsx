
import ProductComponent from "@/components/product/ProductComponent";
import {  Product } from "@/utils/Interfaces";
import { BASE_URL } from "@/utils/Constants";
import SearchBarProducts from "@/components/product/SearchBarProducts";


const ProductPage: React.FC = async() => {


        const response = await fetch(BASE_URL,{cache:'no-store'});

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();



  return (
    <div className="p-6">
      <SearchBarProducts/>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
