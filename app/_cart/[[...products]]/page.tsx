
interface CartProductPageProps{
    params?:{products:string[]}
}

const CartProducts = ({params}:CartProductPageProps)=>{
    return(
        <section className='flex flex-col items-center justify-center h-screen'>
        <h1 className=" text-slate-600 font-semibold ">Cart Products</h1>
        <ul className = "mt-7">
            {params?.products?.map(route => (
                <li className = "font-normal text-xl text-gray-600">{route}</li>
            ))}
        </ul>
      </section>
    );
}


export default CartProducts;