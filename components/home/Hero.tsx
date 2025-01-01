import Link from "next/link";

const Hero = ()=>{
    return(
        <div className="bg-blue-600 text-white py-20 h-screen items-center flex">
        <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Khaled Store</h1>
        <p className="text-lg mb-8">Discover the best products at the best prices</p>
        <Link href="/products" className="bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold">Shop Now</Link>
        </div>
        </div>
    );
}


export default Hero;
