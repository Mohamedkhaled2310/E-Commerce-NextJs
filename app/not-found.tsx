import  Link  from 'next/link';

const NotFoundPage = ()=>{
        return(
            <section className='flex justify-center items-center flex-col h-screen'>
                <h1 className= 'text-7xl text-gray-800 font-bold'>404</h1>
                <p className='text-gray-800 text-3xl mt-2 mb-4'>
                    Page Not Found
                </p>
                <Link href="/" className='text-xl underline text-blue-600'>
                    Go To Home Page
                </Link>
            </section>
        );
} 


export default NotFoundPage;